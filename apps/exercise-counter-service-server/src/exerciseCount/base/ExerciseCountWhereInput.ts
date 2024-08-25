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
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ExerciseSessionWhereUniqueInput } from "../../exerciseSession/base/ExerciseSessionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class ExerciseCountWhereInput {
  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  count?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ExerciseSessionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExerciseSessionWhereUniqueInput)
  @IsOptional()
  @Field(() => ExerciseSessionWhereUniqueInput, {
    nullable: true,
  })
  exerciseSession?: ExerciseSessionWhereUniqueInput;

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
}

export { ExerciseCountWhereInput as ExerciseCountWhereInput };
