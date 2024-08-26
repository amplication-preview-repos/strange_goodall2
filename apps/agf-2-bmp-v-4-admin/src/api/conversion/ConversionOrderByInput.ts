import { SortOrder } from "../../util/SortOrder";

export type ConversionOrderByInput = {
  createdAt?: SortOrder;
  fileId?: SortOrder;
  id?: SortOrder;
  outputPath?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
