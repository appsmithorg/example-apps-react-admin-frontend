import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Filter,
  SearchInput,
  ReferenceField,
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
      <ReferenceField
        source='film_id'
        reference='films'
        link={false}
      >
        <TextField source='title' />
      </ReferenceField>
      <TextField source='status' />
      <ReferenceField
        source='customer_id'
        reference='customers'
        link={false}
      >
        <TextField source='email' />
      </ReferenceField>
      <DateField source='rental_date' />
      <DateField source='return_date' />
    </Datagrid>
  </List>
);

export default RentalList;
