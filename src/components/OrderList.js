import React from 'react';
import {List, Datagrid, TextField, DateField, EditButton} from 'react-admin';

const OrderList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='order_status' />
        <DateField source='order_purchase_timestamp' />
        <DateField source='order_approved_at' />
        <DateField source='order_delivered_carrier_date'/>
        <DateField source='order_delivered_customer_date' />
        <DateField source='order_estimated_delivery_date' />

        <EditButton basePath='/orders' />
      </Datagrid>
    </List>
  );
}

export default OrderList;
