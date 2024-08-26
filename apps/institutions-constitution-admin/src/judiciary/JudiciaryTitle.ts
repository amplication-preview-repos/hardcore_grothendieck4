import { Judiciary as TJudiciary } from "../api/judiciary/Judiciary";

export const JUDICIARY_TITLE_FIELD = "name";

export const JudiciaryTitle = (record: TJudiciary): string => {
  return record.name?.toString() || String(record.id);
};
