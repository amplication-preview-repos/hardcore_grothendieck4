import { ExerciseSessionUpdateManyWithoutUsersInput } from "./ExerciseSessionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  exerciseSessions?: ExerciseSessionUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
