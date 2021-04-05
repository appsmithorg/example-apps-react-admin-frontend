import React from 'react';
import { List, Datagrid, TextField, DateField } from 'react-admin';

const OrderList = (props) => (
  <List {...props} title='List of Orders'>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='order_status' />
      <DateField source='order_purchase_timestamp' />
      <DateField source='order_approved_at' />
      <DateField source='order_delivered_carrier_date' />
      <DateField source='order_delivered_customer_date' />
      <DateField source='order_estimated_delivery_date' />
    </Datagrid>
  </List>
);

export default OrderList;