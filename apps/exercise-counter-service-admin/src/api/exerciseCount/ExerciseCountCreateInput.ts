import { ExerciseSessionWhereUniqueInput } from "../exerciseSession/ExerciseSessionWhereUniqueInput";

export type ExerciseCountCreateInput = {
  count?: number | null;
  exerciseSession?: ExerciseSessionWhereUniqueInput | null;
};
