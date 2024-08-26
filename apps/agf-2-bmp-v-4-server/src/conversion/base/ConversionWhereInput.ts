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
import { FileWhereUniqueInput } from "../../file/base/FileWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumConversionStatus } from "./EnumConversionStatus";

@InputType()
class ConversionWhereInput {
  @ApiProperty({
    required: false,
    type: () => FileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FileWhereUniqueInput)
  @IsOptional()
  @Field(() => FileWhereUniqueInput, {
    nullable: true,
  })
  file?: FileWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  outputPath?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumConversionStatus,
  })
  @IsEnum(EnumConversionStatus)
  @IsOptional()
  @Field(() => EnumConversionStatus, {
    nullable: true,
  })
  status?: "Option1";
}

export { ConversionWhereInput as ConversionWhereInput };
