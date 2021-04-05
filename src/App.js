import React from 'react';
import lb4Provider from 'react-admin-lb4';
import { Admin, Resource } from 'react-admin';
import { authProvider, httpClient } from './Auth';
import OrderList from './components/OrderList';
import OrderShow from './components/OrderShow';

function App() {
  return (
    <Admin
      dataProvider={lb4Provider(process.env.REACT_APP_API_URL, httpClient)}
      authProvider={authProvider}
    >
      <Resource name='orders' list={OrderList} show={OrderShow} />
    </Admin>
  );
}

export default App;
