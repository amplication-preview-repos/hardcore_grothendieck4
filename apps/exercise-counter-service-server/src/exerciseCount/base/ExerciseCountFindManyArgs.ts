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
import { ExerciseCountWhereInput } from "./ExerciseCountWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ExerciseCountOrderByInput } from "./ExerciseCountOrderByInput";

@ArgsType()
class ExerciseCountFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ExerciseCountWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ExerciseCountWhereInput, { nullable: true })
  @Type(() => ExerciseCountWhereInput)
  where?: ExerciseCountWhereInput;

  @ApiProperty({
    required: false,
    type: [ExerciseCountOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ExerciseCountOrderByInput], { nullable: true })
  @Type(() => ExerciseCountOrderByInput)
  orderBy?: Array<ExerciseCountOrderByInput>;

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

export { ExerciseCountFindManyArgs as ExerciseCountFindManyArgs };
