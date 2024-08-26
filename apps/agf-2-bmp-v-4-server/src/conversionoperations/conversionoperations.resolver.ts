import * as graphql from "@nestjs/graphql";
import { UploadFileDto } from "../conversionOperations/UploadFileDto";
import { ConversionOperationsService } from "./conversionoperations.service";

export class ConversionOperationsResolver {
  constructor(protected readonly service: ConversionOperationsService) {}

  @graphql.Mutation(() => String)
  async ConvertFiles(
    @graphql.Args()
    args: UploadFileDto
  ): Promise<string> {
    return this.service.ConvertFiles(args);
  }

  @graphql.Query(() => String)
  async MonitorConversion(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.MonitorConversion(args);
  }

  @graphql.Mutation(() => String)
  async UploadFiles(
    @graphql.Args()
    args: UploadFileDto
  ): Promise<string> {
    return this.service.UploadFiles(args);
  }
}
