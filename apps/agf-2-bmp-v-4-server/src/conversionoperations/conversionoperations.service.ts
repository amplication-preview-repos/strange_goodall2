import { Injectable } from "@nestjs/common";
import { UploadFileDto } from "../conversionOperations/UploadFileDto";

@Injectable()
export class ConversionOperationsService {
  constructor() {}
  async ConvertFiles(args: UploadFileDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async MonitorConversion(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadFiles(args: UploadFileDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
