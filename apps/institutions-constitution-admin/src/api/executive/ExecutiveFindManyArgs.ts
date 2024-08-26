import { ExecutiveWhereInput } from "./ExecutiveWhereInput";
import { ExecutiveOrderByInput } from "./ExecutiveOrderByInput";

export type ExecutiveFindManyArgs = {
  where?: ExecutiveWhereInput;
  orderBy?: Array<ExecutiveOrderByInput>;
  skip?: number;
  take?: number;
};
