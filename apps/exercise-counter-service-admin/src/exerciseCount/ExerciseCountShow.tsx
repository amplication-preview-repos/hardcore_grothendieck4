import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { EXERCISESESSION_TITLE_FIELD } from "../exerciseSession/ExerciseSessionTitle";

export const ExerciseCountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
