import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ExerciseSessionTitle } from "../exerciseSession/ExerciseSessionTitle";

export const ExerciseCountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
