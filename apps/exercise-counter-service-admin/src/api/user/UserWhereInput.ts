import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExerciseSessionListRelationFilter } from "../exerciseSession/ExerciseSessionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  exerciseSessions?: ExerciseSessionListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
