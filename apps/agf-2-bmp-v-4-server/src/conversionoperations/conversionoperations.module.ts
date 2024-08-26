import { Module } from "@nestjs/common";
import { ConversionOperationsService } from "./conversionoperations.service";
import { ConversionOperationsController } from "./conversionoperations.controller";
import { ConversionOperationsResolver } from "./conversionoperations.resolver";

@Module({
  controllers: [ConversionOperationsController],
  providers: [ConversionOperationsService, ConversionOperationsResolver],
  exports: [ConversionOperationsService],
})
export class ConversionOperationsModule {}
