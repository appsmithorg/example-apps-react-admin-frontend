import React from 'react';
import { Admin, Resource } from 'react-admin';
import OrderList from './components/OrderList';
import OrderListEdit from './components/OrderListEdit';
import lb4Provider from 'react-admin-lb4';
//import lb4Provider from 'ra-data-lb4';

import ProductList from './components/ProductList';
import ProductListEdit from './components/ProductListEdit';
import { authProvider, httpClient } from './Auth';

function App() {
  return (
    <Admin
      dataProvider={lb4Provider(process.env.REACT_APP_API_URL, httpClient)}
      authProvider={authProvider}
    >
      <Resource name='orders' list={OrderList} edit={OrderListEdit} />
      <Resource name='products' list={ProductList} edit={ProductListEdit} />
    </Admin>
  );
}

export default App;
