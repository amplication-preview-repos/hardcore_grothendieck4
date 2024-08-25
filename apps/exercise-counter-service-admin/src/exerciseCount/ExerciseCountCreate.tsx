import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ExerciseSessionTitle } from "../exerciseSession/ExerciseSessionTitle";

export const ExerciseCountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="count" source="count" />
        <ReferenceInput
          source="exerciseSession.id"
          reference="ExerciseSession"
          label="ExerciseSession"
        >
          <SelectInput optionText={ExerciseSessionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
