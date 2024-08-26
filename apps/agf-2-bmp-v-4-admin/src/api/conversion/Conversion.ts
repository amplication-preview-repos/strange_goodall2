import { File } from "../file/File";

export type Conversion = {
  createdAt: Date;
  file?: File | null;
  id: string;
  outputPath: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
