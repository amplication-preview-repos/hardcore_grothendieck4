import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ArticleWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  relevantDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
