import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EXERCISESESSION_TITLE_FIELD } from "../exerciseSession/ExerciseSessionTitle";

export const ExerciseCountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ExerciseCounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="count" source="count" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="ExerciseSession"
          source="exercisesession.id"
          reference="ExerciseSession"
        >
          <TextField source={EXERCISESESSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
