import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from 'react-admin';

const RentalEdit = (props) => (
  <Edit {...props} title='Edit of Rentals'>
    <SimpleForm>
      <TextInput disabled source='id' />
      <ReferenceInput  source='film_id' reference='films'>
        <SelectInput disabled optionText='title' />
      </ReferenceInput>
      <ReferenceInput
        source='customer_id'
        reference='customers'
      >
        <SelectInput disabled optionText='email' />
      </ReferenceInput>
      <DateTimeInput disabled source='rental_date' />

      <SelectInput
        source='status'
        choices={[
          { id: 'borrowed', name: 'borrowed' },
          { id: 'delayed', name: 'delayed' },
          { id: 'lost', name: 'lost' },
          { id: 'returned', name: 'returned' },
        ]}
      />
      <DateTimeInput source='return_date' />
    </SimpleForm>
  </Edit>
);

export default RentalEdit;
