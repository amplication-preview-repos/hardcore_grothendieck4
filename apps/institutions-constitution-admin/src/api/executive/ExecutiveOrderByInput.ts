import { SortOrder } from "../../util/SortOrder";

export type ExecutiveOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  termEndDate?: SortOrder;
  termStartDate?: SortOrder;
  updatedAt?: SortOrder;
};
