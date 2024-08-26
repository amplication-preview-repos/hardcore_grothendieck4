import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ExecutiveCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="termEndDate" source="termEndDate" />
        <DateTimeInput label="termStartDate" source="termStartDate" />
      </SimpleForm>
    </Create>
  );
};
