import { Fund as TFund } from "../api/fund/Fund";

export const FUND_TITLE_FIELD = "id";

export const FundTitle = (record: TFund): string => {
  return record.id?.toString() || String(record.id);
};
