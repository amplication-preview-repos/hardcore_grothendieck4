import { Exercise } from "../exercise/Exercise";
import { ExerciseCount } from "../exerciseCount/ExerciseCount";
import { User } from "../user/User";

export type ExerciseSession = {
  createdAt: Date;
  endTime: Date | null;
  exercise?: Exercise | null;
  exerciseCounts?: Array<ExerciseCount>;
  id: string;
  startTime: Date | null;
  updatedAt: Date;
  user?: User | null;
};
