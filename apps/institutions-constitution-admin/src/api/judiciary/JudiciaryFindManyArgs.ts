import { JudiciaryWhereInput } from "./JudiciaryWhereInput";
import { JudiciaryOrderByInput } from "./JudiciaryOrderByInput";

export type JudiciaryFindManyArgs = {
  where?: JudiciaryWhereInput;
  orderBy?: Array<JudiciaryOrderByInput>;
  skip?: number;
  take?: number;
};
