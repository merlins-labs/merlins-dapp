package main

import (
	"database/sql"
	"flag"
	"os"
	"time"

	"github.com/merlins-labsincubus/go/internal/pgutil"
	"github.com/merlins-labsincubus/go/internal/urlutil"
	"github.com/merlins-labsincubus/go/pkg/coingeckoprices"
	"github.com/merlins-labsincubus/go/pkg/prices_db"
	_ "github.com/jackc/pgx/v5/stdlib"
	"github.com/peterbourgon/ff/v3"
	"github.com/pkg/errors"
	"go.uber.org/zap"
)

func main() {
	fs := flag.NewFlagSet("prices-ohlc-backfill", flag.ContinueOnError)
	var (
		coinId = fs.String("coin-id", "merlins", "coingecko id of coin to backfill")
		dbHost = fs.String("prices-db-host", "", "host postgreSQL database")
		dbPort = fs.Int("prices-db-port", -1, "port for postgreSQL database")
		dbPass = fs.String("prices-db-password", "", "password for postgreSQL database")
		dbName = fs.String("prices-db-name", "", "database name for postgreSQL")
		dbUser = fs.String("prices-db-user", "", "username for postgreSQL")
	)
	if err := ff.Parse(fs, os.Args[1:],
		ff.WithEnvVars(),
		ff.WithIgnoreUndefined(true),
		ff.WithConfigFile(".env"),
		ff.WithConfigFileParser(ff.EnvParser),
		ff.WithAllowMissingConfigFile(true),
	); err != nil {
		panic(errors.Wrap(err, "failed to parse flags"))
	}

	logger, err := zap.NewDevelopment()
	if err != nil {
		panic(errors.Wrap(err, "failed to create logger"))
	}

	cgprices, err := coingeckoprices.NewCoinGeckoPrices()
	if err != nil {
		panic(errors.Wrap(err, "failed to create coingecko client"))
	}

	if *dbHost == "" || *dbUser == "" || *dbPass == "" || *dbPort < 0 {
		panic(errors.New("invalid database configuration"))
	}

	dbURL := pgutil.PostgreSQLURL(&pgutil.PostgreSQLConfig{
		User:         *dbUser,
		Password:     *dbPass,
		Port:         *dbPort,
		DatabaseName: *dbName,
		Host:         *dbHost,
	})

	logger.Info("using database", zap.String("url", urlutil.RedactPassword(&dbURL).String()))

	db, err := sql.Open("pgx", dbURL.String())
	if err != nil {
		panic(errors.Wrap(err, "failed to open db"))
	}
	defer db.Close()

	ohlc, err := cgprices.OHLC(*coinId, 30)
	if err != nil {
		panic(errors.Wrap(err, "failed to query last month ohlc"))
	}
	if len(ohlc) == 0 {
		panic(errors.New("no ohlc data"))
	}
	for _, p := range ohlc {
		if p.Time.After(time.Now()) {
			continue
		}
		if err := prices_db.PriceUpsert(db, p.Time, *coinId, p.Open); err != nil {
			panic(errors.Wrap(err, "failed to upsert price"))
		}
	}
}
