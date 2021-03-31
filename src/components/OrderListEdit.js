import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  SelectInput,
} from 'react-admin';

const OrderListEdit = (props) => {
  return (
    <Edit title='Update shipping limit date' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <SelectInput
          source='order_status'
          choices={[
            {
              id: 'invoiced',
              name: 'invoiced',
            },
            {
              id: 'delivered',
              name: 'delivered',
            },
            {
              id: 'shipped',
              name: 'shipped',
            },
            {
              id: 'unavailable',
              name: 'unavailable',
            },
          ]}
        />

        <DateTimeInput label='Approved' source='order_approved_at' />
        <DateTimeInput
          label='Est Delivery'
          source='order_estimated_delivery_date'
        />
        <DateTimeInput label='Carrier' source='order_delivered_carrier_date' />
      </SimpleForm>
    </Edit>
  );
};

export default OrderListEdit;
