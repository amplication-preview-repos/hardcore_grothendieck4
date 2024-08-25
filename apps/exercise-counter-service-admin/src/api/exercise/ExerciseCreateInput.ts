import { ExerciseSessionCreateNestedManyWithoutExercisesInput } from "./ExerciseSessionCreateNestedManyWithoutExercisesInput";

export type ExerciseCreateInput = {
  exerciseSessions?: ExerciseSessionCreateNestedManyWithoutExercisesInput;
  name?: string | null;
};
