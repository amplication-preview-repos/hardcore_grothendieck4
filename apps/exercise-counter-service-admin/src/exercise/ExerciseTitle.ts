import { Exercise as TExercise } from "../api/exercise/Exercise";

export const EXERCISE_TITLE_FIELD = "name";

export const ExerciseTitle = (record: TExercise): string => {
  return record.name?.toString() || String(record.id);
};
