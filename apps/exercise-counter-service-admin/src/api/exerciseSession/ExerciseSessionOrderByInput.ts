import { SortOrder } from "../../util/SortOrder";

export type ExerciseSessionOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  exerciseId?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
