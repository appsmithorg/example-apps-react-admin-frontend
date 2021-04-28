import React from 'react';
import { List, Filter, Datagrid, TextField, SearchInput, } from 'react-admin';

const CustomerFilter = (props) => (
  <Filter {...props}>
    <SearchInput placeholder='Customer Email' source='email' resettable alwaysOn />
  </Filter>
);

const CustomerList = (props) => (
  <List {...props} filters={<CustomerFilter />} title='List of Customers'>
    <Datagrid
      rowClick={(id, basePath, record) => {
        return `/rentals?filter=%7B%22customer_email%22%3A%22${record.email}%22%7D&order=ASC&page=1&perPage=10&sort=film_title`;
      }}
    >
      <TextField disabled source='id' />
      <TextField source='first_name' />
      <TextField source='last_name' />
      <TextField source='email' />
      <TextField source='activebool' label='Active' />
    </Datagrid>
  </List>
);

export default CustomerList;
