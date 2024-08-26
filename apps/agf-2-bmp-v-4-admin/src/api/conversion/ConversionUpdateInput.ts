import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";

export type ConversionUpdateInput = {
  file?: FileWhereUniqueInput | null;
  outputPath?: string | null;
  status?: "Option1" | null;
};
