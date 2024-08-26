import { ConversionCreateNestedManyWithoutFilesInput } from "./ConversionCreateNestedManyWithoutFilesInput";

export type FileCreateInput = {
  conversions?: ConversionCreateNestedManyWithoutFilesInput;
  name?: string | null;
  path?: string | null;
  typeField?: "Option1" | null;
};
