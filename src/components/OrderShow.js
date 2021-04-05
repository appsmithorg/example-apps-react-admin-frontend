import * as React from 'react';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import { Show, TextField, DateField, SimpleShowLayout, useUpdate, TopToolbar } from 'react-admin';

const PostShowActions = ({ data }) => {
  const [update] = useUpdate('orders', data?.id, {
    order_status: 'refunded',
  });
  return (
    <TopToolbar>
      <div style={{ color: 'red' }}>
        <Button
          color='inherit'
          onClick={update}
          variant='outlined'
          startIcon={<ReplayIcon />}
        >
          Refund
        </Button>
      </div>
    </TopToolbar>
  );
};

const OrderShow = (props) => {
  return (
    <Show actions={<PostShowActions />} {...props}>
      <SimpleShowLayout>
        <TextField disabled source='id' />
        <TextField source='order_status' />
        <DateField label='Approved' source='order_approved_at' />
      </SimpleShowLayout>
    </Show>
  );
};

export default OrderShow