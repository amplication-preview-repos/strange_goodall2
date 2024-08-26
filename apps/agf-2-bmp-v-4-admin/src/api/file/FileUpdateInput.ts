import { ConversionUpdateManyWithoutFilesInput } from "./ConversionUpdateManyWithoutFilesInput";

export type FileUpdateInput = {
  conversions?: ConversionUpdateManyWithoutFilesInput;
  name?: string | null;
  path?: string | null;
  typeField?: "Option1" | null;
};
