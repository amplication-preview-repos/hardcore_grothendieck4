import { ExerciseSession as TExerciseSession } from "../api/exerciseSession/ExerciseSession";

export const EXERCISESESSION_TITLE_FIELD = "id";

export const ExerciseSessionTitle = (record: TExerciseSession): string => {
  return record.id?.toString() || String(record.id);
};
