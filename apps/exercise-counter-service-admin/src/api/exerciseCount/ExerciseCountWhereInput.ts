import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ExerciseSessionWhereUniqueInput } from "../exerciseSession/ExerciseSessionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ExerciseCountWhereInput = {
  count?: IntNullableFilter;
  exerciseSession?: ExerciseSessionWhereUniqueInput;
  id?: StringFilter;
};
