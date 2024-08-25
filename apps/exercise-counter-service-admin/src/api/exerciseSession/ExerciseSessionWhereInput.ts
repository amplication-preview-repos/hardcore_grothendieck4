import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";
import { ExerciseCountListRelationFilter } from "../exerciseCount/ExerciseCountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExerciseSessionWhereInput = {
  endTime?: DateTimeNullableFilter;
  exercise?: ExerciseWhereUniqueInput;
  exerciseCounts?: ExerciseCountListRelationFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
