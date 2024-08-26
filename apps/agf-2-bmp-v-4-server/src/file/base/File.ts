/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Conversion } from "../../conversion/base/Conversion";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumFileTypeField } from "./EnumFileTypeField";

@ObjectType()
class File {
  @ApiProperty({
    required: false,
    type: () => [Conversion],
  })
  @ValidateNested()
  @Type(() => Conversion)
  @IsOptional()
  conversions?: Array<Conversion>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  name!: string | null;

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
  path!: string | null;

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

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { File as File };
