import { merlinsCurrencies } from "./currencies";
import { NetworkKind, CosmosNetworkInfo, NetworkFeature } from "../types";

const nameServiceContractAddress =
  "fury1wkwy0xh89ksdgj9hr347dyd2dw7zesmtrue6kfzyml4vdtz6e5wscs7038";
const riotContractAddressGen1 =
  "fury1gflccmghzfscmxl95z43v36y0rle8v9x8kvt9na03yzywtw86amsj9nf37";

export const merlinsNetwork: CosmosNetworkInfo = {
  id: "merlins",
  kind: NetworkKind.Cosmos,
  chainId: "merlins-1",
  displayName: "Merlins",
  icon: "icons/networks/merlins.svg",
  features: [
    NetworkFeature.NFTMarketplace,
    NetworkFeature.Organizations,
    NetworkFeature.SocialFeed,
    NetworkFeature.UPP,
  ],
  walletUrlForStaking: "https://app.merlins.world/staking",
  currencies: merlinsCurrencies,
  txExplorer: "https://www.mintscan.io/merlins/txs/$hash",
  accountExplorer: "https://www.mintscan.io/merlins/account/$address",
  contractExplorer: "https://www.mintscan.io/merlins/account/$address",
  idPrefix: "fury",
  testnet: false,
  backendEndpoint: "https://dapp-backend.mainnet.merlins.world",
  addressPrefix: "fury",
  restEndpoint: "https://rest..merlins.world",
  rpcEndpoint: "https://rpc..merlins.world",
  stakeCurrency: "ufury",
  gasPriceStep: {
    low: 0.0,
    average: 0.025,
    high: 0.04,
  },
  cosmosFeatures: [
    "stargate",
    "ibc-transfer",
    "cosmwasm",
    "no-legacy-stdTx",
    "ibc-go",
  ],
  nameServiceContractAddress,
  nameServiceDefaultImage:
    "ipfs://bafkreieqcwmjcb64r42ygs6a4dswz63djzgayjn3rhzjber3e42cknawlm",
  nameServiceTLD: ".fury",
  vaultContractAddress:
    "fury14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s3hewys",
  riotContractAddressGen0:
    "fury1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqg87tkw",
  riotContractAddressGen1,
  riotSquadStakingContractAddressV1:
    "fury1zwkmdfsc6h96jm4yqdykaw5y7ndwsvqvgh5ryxp9nxs3hccml0xqfyrm37",
  riotSquadStakingContractAddressV2:
    "fury1kvjk9m7dk0es35y6ah0k28llllvle3n7xgvh0gh568ta0paf8awsml2xev",
  distributorContractAddress:
    "fury1mnem0rhjaxcsghe0xw692xysra63xwwdee2wth9s0rkfwh4dxpaq76qqre",
  riotersFooterContractAddress:
    "fury1m6g3l3j5t988zwmp965hrhsxvm8jrkf2ulw4gmwj8hx8pd84tvcqeearsd",
  secondaryDuringMintList: [
    nameServiceContractAddress,
    riotContractAddressGen1,
    "fury1r8raaqul4j05qtn0t05603mgquxfl8e9p7kcf7smwzcv2hc5rrlq0vket0", // Merlins's pets
    "fury167xst2jy9n6u92t3n8hf762adtpe3cs6acsgn0w5n2xlz9hv3xgs4ksc6t", // Diseases of the Brain AI
    "fury1qdgvugdnscwnj8lc96q666000gyjv434kn9zl9ey3dph6p0cunusy6r42x", // Furysouls
    "fury1r5f97ltu4d5jdn8jv5zjhc0vz2npjhnc9zcuz29z8ua739s376dql5agt4", // The skull arts
    "fury16504tvqjzrln0gsewpcn20863h5ftr638fxlx37a6ntd7w5tudwqs8f3ts", // Mr Crypto
  ],
  excludeFromLaunchpadList: [riotContractAddressGen1],
  socialFeedContractAddress:
    "fury1lxf8agg0wd2m7n2ultl0yx337jw23puh0mlkkw5vhtnkkfettwfqya7kpp",
  daoFactoryContractAddress:
    "fury16rxh5hgukhdq8rvm2j3t6v483dcqguwp4l825vlwz5pmfpw7s4rs45nnca",
  daoCoreCodeId: 27,
  daoPreProposeSingleCodeId: 28,
  daoProposalSingleCodeId: 31,
  daoCw4GroupCodeId: 32,
  daoVotingCw4CodeId: 33,
};
