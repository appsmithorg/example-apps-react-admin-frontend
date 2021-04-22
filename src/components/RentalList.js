import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Filter,
  SearchInput,
} from 'react-admin';

const RentalFilter = (props) => (
  <Filter {...props}>
    <SearchInput placeholder='Rental ID' source='id' resettable alwaysOn />
  </Filter>
);

const RentalList = (props) => (
  <List {...props} filters={<RentalFilter />} title='List of Rentals'>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='film_title' />
      <TextField source='status' />
      <TextField source='customer_email' />
      <DateField source='rental_date' />
      <DateField source='return_date' />
    </Datagrid>
  </List>
);

export default RentalList;
