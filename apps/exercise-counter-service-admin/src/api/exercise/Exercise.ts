import { ExerciseSession } from "../exerciseSession/ExerciseSession";

export type Exercise = {
  createdAt: Date;
  exerciseSessions?: Array<ExerciseSession>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
