import { FundBalance as TFundBalance } from "../api/fundBalance/FundBalance";

export const FUNDBALANCE_TITLE_FIELD = "id";

export const FundBalanceTitle = (record: TFundBalance): string => {
  return record.id?.toString() || String(record.id);
};
