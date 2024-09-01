import { DonationWhereInput } from "./DonationWhereInput";
import { DonationOrderByInput } from "./DonationOrderByInput";

export type DonationFindManyArgs = {
  where?: DonationWhereInput;
  orderBy?: Array<DonationOrderByInput>;
  skip?: number;
  take?: number;
};
