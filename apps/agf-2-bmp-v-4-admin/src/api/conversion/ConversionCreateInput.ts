import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";

export type ConversionCreateInput = {
  file?: FileWhereUniqueInput | null;
  outputPath?: string | null;
  status?: "Option1" | null;
};
