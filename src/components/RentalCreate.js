import React from 'react';
import {
  Create,
  SimpleForm,
  DateTimeInput,
  SelectInput,
  useNotify,
  useRefresh,
  useRedirect,
  ReferenceInput,
} from 'react-admin';

const RentalCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = ({ data }) => {
    notify(`New Rental created `);
    redirect(`/rentals?filter=%7B"id"%3A"${data.id}"%7D`);
    refresh();
  };

  return (
    <Create {...props} title='Create new Rental' onSuccess={onSuccess}>
      <SimpleForm>
        <ReferenceInput
          label='Customer'
          source='customer_id'
          reference='customers'
          perPage={600}
          sort={{ field: 'email', order: 'ASC' }}
        >
          <SelectInput optionText='email' />
        </ReferenceInput>
        <ReferenceInput
          label='Film'
          source='film_id'
          reference='films'
          perPage={1000}
          sort={{ field: 'title', order: 'ASC' }}
        >
          <SelectInput optionText='title' />
        </ReferenceInput>
        <SelectInput
          source='status'
          defaultValue='borrowed'
          disabled
          choices={[
            { id: 'borrowed', name: 'borrowed' },
            { id: 'delayed', name: 'delayed' },
            { id: 'lost', name: 'lost' },
            { id: 'returned', name: 'returned' },
          ]}
        />

        <DateTimeInput source='rental_date' />

        <DateTimeInput source='return_date' />
      </SimpleForm>
    </Create>
  );
};

export default RentalCreate;
