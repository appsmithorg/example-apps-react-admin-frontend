import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  SelectInput,
} from 'react-admin';

const RentalEdit = (props) => (
  <Edit {...props} title='Edit of Rentals'>
    <SimpleForm>
      <TextInput disabled source='id' />
      <DateTimeInput disabled source='rental_date' />

      <SelectInput
        source='status'
        choices={[
          { id: 'new', name: 'new' },
          { id: 'paid', name: 'paid' },
          { id: 'outbound', name: 'outbound' },
          { id: 'returned', name: 'returned' },
          { id: 'canceled', name: 'canceled' },
          { id: 'lost', name: 'lost' },
        ]}
      />
      <DateTimeInput source='return_date' />
    </SimpleForm>
  </Edit>
);

export default RentalEdit;
