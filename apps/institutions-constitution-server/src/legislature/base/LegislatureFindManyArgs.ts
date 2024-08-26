/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LegislatureWhereInput } from "./LegislatureWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LegislatureOrderByInput } from "./LegislatureOrderByInput";

@ArgsType()
class LegislatureFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LegislatureWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LegislatureWhereInput, { nullable: true })
  @Type(() => LegislatureWhereInput)
  where?: LegislatureWhereInput;

  @ApiProperty({
    required: false,
    type: [LegislatureOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LegislatureOrderByInput], { nullable: true })
  @Type(() => LegislatureOrderByInput)
  orderBy?: Array<LegislatureOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LegislatureFindManyArgs as LegislatureFindManyArgs };
