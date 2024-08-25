import { ExerciseSessionListRelationFilter } from "../exerciseSession/ExerciseSessionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ExerciseWhereInput = {
  exerciseSessions?: ExerciseSessionListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
