import { HomelessPersonWhereInput } from "./HomelessPersonWhereInput";
import { HomelessPersonOrderByInput } from "./HomelessPersonOrderByInput";

export type HomelessPersonFindManyArgs = {
  where?: HomelessPersonWhereInput;
  orderBy?: Array<HomelessPersonOrderByInput>;
  skip?: number;
  take?: number;
};
