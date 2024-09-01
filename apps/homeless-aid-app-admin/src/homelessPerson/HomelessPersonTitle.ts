import { HomelessPerson as THomelessPerson } from "../api/homelessPerson/HomelessPerson";

export const HOMELESSPERSON_TITLE_FIELD = "id";

export const HomelessPersonTitle = (record: THomelessPerson): string => {
  return record.id?.toString() || String(record.id);
};
