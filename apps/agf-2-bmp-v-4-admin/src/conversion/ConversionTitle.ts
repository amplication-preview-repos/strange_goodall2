import { Conversion as TConversion } from "../api/conversion/Conversion";

export const CONVERSION_TITLE_FIELD = "outputPath";

export const ConversionTitle = (record: TConversion): string => {
  return record.outputPath?.toString() || String(record.id);
};
