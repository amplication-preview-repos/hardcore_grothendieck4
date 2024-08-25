import { ExerciseWhereInput } from "./ExerciseWhereInput";
import { ExerciseOrderByInput } from "./ExerciseOrderByInput";

export type ExerciseFindManyArgs = {
  where?: ExerciseWhereInput;
  orderBy?: Array<ExerciseOrderByInput>;
  skip?: number;
  take?: number;
};
