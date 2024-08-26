import { Executive as TExecutive } from "../api/executive/Executive";

export const EXECUTIVE_TITLE_FIELD = "name";

export const ExecutiveTitle = (record: TExecutive): string => {
  return record.name?.toString() || String(record.id);
};
