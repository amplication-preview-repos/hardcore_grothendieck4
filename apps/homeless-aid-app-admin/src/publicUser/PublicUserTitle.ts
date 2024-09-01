import { PublicUser as TPublicUser } from "../api/publicUser/PublicUser";

export const PUBLICUSER_TITLE_FIELD = "id";

export const PublicUserTitle = (record: TPublicUser): string => {
  return record.id?.toString() || String(record.id);
};
