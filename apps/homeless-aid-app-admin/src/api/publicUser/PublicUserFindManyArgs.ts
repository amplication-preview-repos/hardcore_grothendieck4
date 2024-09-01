import { PublicUserWhereInput } from "./PublicUserWhereInput";
import { PublicUserOrderByInput } from "./PublicUserOrderByInput";

export type PublicUserFindManyArgs = {
  where?: PublicUserWhereInput;
  orderBy?: Array<PublicUserOrderByInput>;
  skip?: number;
  take?: number;
};
