package collections

import "github.com/merlins-labsincubus/go/pkg/marketplacepb"

type CollectionsProvider interface {
	Collections(limit, offset int) chan *marketplacepb.Collection
}
