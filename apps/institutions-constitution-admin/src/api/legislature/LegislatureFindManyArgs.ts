import { LegislatureWhereInput } from "./LegislatureWhereInput";
import { LegislatureOrderByInput } from "./LegislatureOrderByInput";

export type LegislatureFindManyArgs = {
  where?: LegislatureWhereInput;
  orderBy?: Array<LegislatureOrderByInput>;
  skip?: number;
  take?: number;
};
