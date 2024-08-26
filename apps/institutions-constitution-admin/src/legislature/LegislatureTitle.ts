import { Legislature as TLegislature } from "../api/legislature/Legislature";

export const LEGISLATURE_TITLE_FIELD = "name";

export const LegislatureTitle = (record: TLegislature): string => {
  return record.name?.toString() || String(record.id);
};
