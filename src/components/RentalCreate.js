import React, { useEffect, useState } from 'react';
import {
  Create,
  SimpleForm,
  DateTimeInput,
  SelectInput,
  useNotify,
  useRefresh,
  useRedirect,
  useQuery,
} from 'react-admin';

const RentalCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`New Rental created `);
    redirect('/rentals');
    refresh();
  };

  const [customers, setCustomers] = useState([]);
  const { data: customer } = useQuery({
    type: 'getList',
    resource: 'customers',
    payload: {
      pagination: { page: 1, perPage: 600 },
      sort: { field: 'email', order: 'ASC' },
      filter: {},
    },
  });
  useEffect(() => {
    if (customer)
      setCustomers(customer.map((d) => ({ id: d.id, name: d.email })));
  }, [customer]);

  const [films, setFilms] = useState([]);
  const { data: film } = useQuery({
    type: 'getList',
    resource: 'films',
    payload: {
      pagination: { page: 1, perPage: 1000 },
      sort: { field: 'title', order: 'ASC' },
      filter: {},
    },
  });
  useEffect(() => {
    if (film) setFilms(film.map((d) => ({ id: d.id, name: d.title })));
  }, [film]);

  return (
    <Create {...props} title='Create new Rental' onSuccess={onSuccess}>
      <SimpleForm>
        <SelectInput source='customer_id' choices={customers} />

        <SelectInput source='film_id' choices={films} />
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

        <DateTimeInput source='rental_date' />

        <DateTimeInput source='return_date' />
      </SimpleForm>
    </Create>
  );
};

export default RentalCreate;
