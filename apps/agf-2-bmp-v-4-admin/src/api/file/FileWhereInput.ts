import { ConversionListRelationFilter } from "../conversion/ConversionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FileWhereInput = {
  conversions?: ConversionListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  path?: StringNullableFilter;
  typeField?: "Option1";
};
