/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConversionUpdateManyWithoutFilesInput } from "./ConversionUpdateManyWithoutFilesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumFileTypeField } from "./EnumFileTypeField";

@InputType()
class FileUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ConversionUpdateManyWithoutFilesInput,
  })
  @ValidateNested()
  @Type(() => ConversionUpdateManyWithoutFilesInput)
  @IsOptional()
  @Field(() => ConversionUpdateManyWithoutFilesInput, {
    nullable: true,
  })
  conversions?: ConversionUpdateManyWithoutFilesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  path?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumFileTypeField,
  })
  @IsEnum(EnumFileTypeField)
  @IsOptional()
  @Field(() => EnumFileTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { FileUpdateInput as FileUpdateInput };
