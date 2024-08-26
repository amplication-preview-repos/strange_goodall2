import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ConversionOperationsService } from "./conversionoperations.service";
import { UploadFileDto } from "../conversionOperations/UploadFileDto";

@swagger.ApiTags("conversionOperations")
@common.Controller("conversionOperations")
export class ConversionOperationsController {
  constructor(protected readonly service: ConversionOperationsService) {}

  @common.Post("/convert-files")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConvertFiles(
    @common.Body()
    body: UploadFileDto
  ): Promise<string> {
        return this.service.ConvertFiles(body);
      }

  @common.Get("/monitor-conversion/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async MonitorConversion(
    @common.Body()
    body: UploadFileDto
  ): Promise<string> {
        return this.service.MonitorConversion(body);
      }

  @common.Post("/upload-files")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadFiles(
    @common.Body()
    body: UploadFileDto
  ): Promise<string> {
        return this.service.UploadFiles(body);
      }
}
