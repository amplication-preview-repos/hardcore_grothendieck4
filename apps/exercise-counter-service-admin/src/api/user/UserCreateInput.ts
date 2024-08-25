import { ExerciseSessionCreateNestedManyWithoutUsersInput } from "./ExerciseSessionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  exerciseSessions?: ExerciseSessionCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
