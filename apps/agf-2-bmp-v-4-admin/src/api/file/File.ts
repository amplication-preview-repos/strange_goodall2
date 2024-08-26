import { Conversion } from "../conversion/Conversion";

export type File = {
  conversions?: Array<Conversion>;
  createdAt: Date;
  id: string;
  name: string | null;
  path: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
