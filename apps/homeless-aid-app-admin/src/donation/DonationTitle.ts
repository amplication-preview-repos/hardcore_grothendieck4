import { Donation as TDonation } from "../api/donation/Donation";

export const DONATION_TITLE_FIELD = "id";

export const DonationTitle = (record: TDonation): string => {
  return record.id?.toString() || String(record.id);
};
