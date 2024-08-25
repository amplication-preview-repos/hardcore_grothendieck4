import { ExerciseCount as TExerciseCount } from "../api/exerciseCount/ExerciseCount";

export const EXERCISECOUNT_TITLE_FIELD = "id";

export const ExerciseCountTitle = (record: TExerciseCount): string => {
  return record.id?.toString() || String(record.id);
};
