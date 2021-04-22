import React, { useState, useEffect } from 'react';
import {
  Create,
  SimpleForm,
  DateTimeInput,
  SelectInput,
  useNotify,
  useRefresh,
  useRedirect,
  useQuery,
  TextInput,
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
    if (film) setFilms(film.map((d) => ({ id: d.title, name: d.title })));
    if (customer)
      setCustomers(customer.map((d) => ({ id: d.email, name: d.email })));
  }, [film, customer]);

  return (
    <Create {...props} title='Create new Rental' onSuccess={onSuccess}>
      <SimpleForm>
        <TextInput disabled source='staff_id' defaultValue='1' />
        <SelectInput source='customer_email' choices={customers} />
        <SelectInput source='film_title' choices={films} />
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
