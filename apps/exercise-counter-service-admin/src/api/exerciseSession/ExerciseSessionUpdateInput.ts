import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";
import { ExerciseCountUpdateManyWithoutExerciseSessionsInput } from "./ExerciseCountUpdateManyWithoutExerciseSessionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExerciseSessionUpdateInput = {
  endTime?: Date | null;
  exercise?: ExerciseWhereUniqueInput | null;
  exerciseCounts?: ExerciseCountUpdateManyWithoutExerciseSessionsInput;
  startTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
