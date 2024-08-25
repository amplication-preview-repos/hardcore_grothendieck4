import { SortOrder } from "../../util/SortOrder";

export type ExerciseCountOrderByInput = {
  count?: SortOrder;
  createdAt?: SortOrder;
  exerciseSessionId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
