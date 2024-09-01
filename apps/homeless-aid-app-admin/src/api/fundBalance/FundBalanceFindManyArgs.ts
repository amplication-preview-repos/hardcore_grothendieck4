import { FundBalanceWhereInput } from "./FundBalanceWhereInput";
import { FundBalanceOrderByInput } from "./FundBalanceOrderByInput";

export type FundBalanceFindManyArgs = {
  where?: FundBalanceWhereInput;
  orderBy?: Array<FundBalanceOrderByInput>;
  skip?: number;
  take?: number;
};
