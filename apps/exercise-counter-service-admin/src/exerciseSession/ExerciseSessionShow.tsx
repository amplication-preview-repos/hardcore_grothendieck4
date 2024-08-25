import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EXERCISESESSION_TITLE_FIELD } from "./ExerciseSessionTitle";
import { EXERCISE_TITLE_FIELD } from "../exercise/ExerciseTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ExerciseSessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="endTime" source="endTime" />
        <ReferenceField
          label="Exercise"
          source="exercise.id"
          reference="Exercise"
        >
          <TextField source={EXERCISE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="startTime" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ExerciseCount"
          target="exerciseSessionId"
          label="ExerciseCounts"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
