import { ExerciseCountWhereInput } from "./ExerciseCountWhereInput";
import { ExerciseCountOrderByInput } from "./ExerciseCountOrderByInput";

export type ExerciseCountFindManyArgs = {
  where?: ExerciseCountWhereInput;
  orderBy?: Array<ExerciseCountOrderByInput>;
  skip?: number;
  take?: number;
};
