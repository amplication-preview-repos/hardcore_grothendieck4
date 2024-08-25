import { ExerciseSessionWhereInput } from "./ExerciseSessionWhereInput";
import { ExerciseSessionOrderByInput } from "./ExerciseSessionOrderByInput";

export type ExerciseSessionFindManyArgs = {
  where?: ExerciseSessionWhereInput;
  orderBy?: Array<ExerciseSessionOrderByInput>;
  skip?: number;
  take?: number;
};
