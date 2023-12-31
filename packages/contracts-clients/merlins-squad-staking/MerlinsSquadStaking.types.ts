/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type ExecuteMsg = {
  update_config: {
    owner?: Addr | null;
    squad_count_limit?: number | null;
  };
} | {
  set_supported_collection: {
    contract_addr: string;
    is_supported: boolean;
  };
} | {
  update_cooldown: {
    cooldown_period: number;
  };
} | {
  update_squad_size: {
    max_squad_size: number;
    min_squad_size: number;
  };
} | {
  update_bonus_multiplier: {
    bonus_multiplier: number[];
  };
} | {
  stake: {
    nfts: Nft[];
  };
} | {
  withdraw: {};
};
export type Addr = string;
export interface Nft {
  contract_addr: string;
  token_id: string;
}
export interface GetConfigResponse {
  bonus_multiplier: number[];
  cooldown_period: number;
  max_squad_size: number;
  min_squad_size: number;
  owner: Addr;
  squad_count_limit: number;
}
export type GetSquadResponse = Squad[];
export interface Squad {
  end_time: number;
  nfts: Nft[];
  start_time: number;
}
export interface GetUserSquadCountResponse {
  count: number;
}
export interface InstantiateMsg {
  bonus_multiplier: number[];
  cooldown_period: number;
  max_squad_size: number;
  min_squad_size: number;
  squad_count_limit: number;
}
export type IsCollectionWhitelistedResponse = boolean;
export type QueryMsg = {
  get_config: {};
} | {
  get_user_squad_count: {
    user: Addr;
  };
} | {
  get_squad: {
    owner: Addr;
  };
} | {
  is_collection_whitelisted: {
    contract_addr: string;
  };
};