import { ExerciseWhereUniqueInput } from "../exercise/ExerciseWhereUniqueInput";
import { ExerciseCountCreateNestedManyWithoutExerciseSessionsInput } from "./ExerciseCountCreateNestedManyWithoutExerciseSessionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExerciseSessionCreateInput = {
  endTime?: Date | null;
  exercise?: ExerciseWhereUniqueInput | null;
  exerciseCounts?: ExerciseCountCreateNestedManyWithoutExerciseSessionsInput;
  startTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
