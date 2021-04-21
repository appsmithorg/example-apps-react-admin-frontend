import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
} from 'react-admin';

const RentalList = (props) => (
  <List {...props} title='List of Rentals'>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='status' />
      <ReferenceField label='Movie Name' source='film_id' reference='films' link={false}>
        <TextField source='title' />
      </ReferenceField>
      <TextField source='inventory_id' />
      <TextField source='customer_id' />
      <TextField source='staff_id' />
      <DateField source='rental_date' />
      <DateField source='return_date' />
      <DateField source='last_update' />
    </Datagrid>
  </List>
);

export default RentalList;
