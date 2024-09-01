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
import { HomelessPersonWhereInput } from "./HomelessPersonWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HomelessPersonOrderByInput } from "./HomelessPersonOrderByInput";

@ArgsType()
class HomelessPersonFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HomelessPersonWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HomelessPersonWhereInput, { nullable: true })
  @Type(() => HomelessPersonWhereInput)
  where?: HomelessPersonWhereInput;

  @ApiProperty({
    required: false,
    type: [HomelessPersonOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HomelessPersonOrderByInput], { nullable: true })
  @Type(() => HomelessPersonOrderByInput)
  orderBy?: Array<HomelessPersonOrderByInput>;

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

export { HomelessPersonFindManyArgs as HomelessPersonFindManyArgs };
