import { HomelessIndividual as THomelessIndividual } from "../api/homelessIndividual/HomelessIndividual";

export const HOMELESSINDIVIDUAL_TITLE_FIELD = "id";

export const HomelessIndividualTitle = (
  record: THomelessIndividual
): string => {
  return record.id?.toString() || String(record.id);
};
