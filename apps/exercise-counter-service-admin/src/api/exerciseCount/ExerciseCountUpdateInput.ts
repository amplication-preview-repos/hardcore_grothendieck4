import { ExerciseSessionWhereUniqueInput } from "../exerciseSession/ExerciseSessionWhereUniqueInput";

export type ExerciseCountUpdateInput = {
  count?: number | null;
  exerciseSession?: ExerciseSessionWhereUniqueInput | null;
};
