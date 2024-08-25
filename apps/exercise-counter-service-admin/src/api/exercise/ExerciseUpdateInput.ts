import { ExerciseSessionUpdateManyWithoutExercisesInput } from "./ExerciseSessionUpdateManyWithoutExercisesInput";

export type ExerciseUpdateInput = {
  exerciseSessions?: ExerciseSessionUpdateManyWithoutExercisesInput;
  name?: string | null;
};
