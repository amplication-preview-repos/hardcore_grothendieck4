import { ExerciseSession } from "../exerciseSession/ExerciseSession";

export type ExerciseCount = {
  count: number | null;
  createdAt: Date;
  exerciseSession?: ExerciseSession | null;
  id: string;
  updatedAt: Date;
};
