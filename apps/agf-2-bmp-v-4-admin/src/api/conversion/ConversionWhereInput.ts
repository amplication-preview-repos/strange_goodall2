import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConversionWhereInput = {
  file?: FileWhereUniqueInput;
  id?: StringFilter;
  outputPath?: StringNullableFilter;
  status?: "Option1";
};
