import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  path?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
