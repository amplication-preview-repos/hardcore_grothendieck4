import { SortOrder } from "../../util/SortOrder";

export type ExerciseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
