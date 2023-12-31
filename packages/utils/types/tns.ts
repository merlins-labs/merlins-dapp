import { Metadata } from "../../contracts-clients/merlins-name-service/MerlinsNameService.types";

export const defaultMetaData: Metadata = {
  image: "",
  public_profile_header: "",
  email: "",
  external_url: "",
  public_name: "",
  public_bio: "",
  twitter_id: "",
  discord_id: "",
  telegram_id: "",
  keybase_id: "",
  validator_operator_address: "",
};
// interface MintMsg {
//   owner: string;
//   token_id: string;
//   token_uri: string | null;
//   extension: Metadata | null;
// }

export interface MetadataWithTokenId extends Metadata {
  token_id: string;
}

export type TNSSendFundsFormType = {
  comment: string;
  amount: string;
};

export type NameFinderFormType = {
  name: string;
};
