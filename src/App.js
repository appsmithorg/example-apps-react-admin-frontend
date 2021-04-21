import React from 'react';
import lb4Provider from 'react-admin-lb4';
import { Admin, Resource } from 'react-admin';
import { authProvider, httpClient } from './Auth';
import RentalList from './components/RentalList';
import CustomerList from './components/CustomerList';
import RentalEdit from './components/RentalEdit';
import RentalCreate from './components/RentalCreate';

function App() {
  return (
    <Admin
      dataProvider={lb4Provider(process.env.REACT_APP_API_URL, httpClient)}
      authProvider={authProvider}
    >
      <Resource name='customers' list={CustomerList}  />    
      <Resource name='rentals' create={RentalCreate} list={RentalList} edit={RentalEdit}/>
      <Resource name='films'/>
    </Admin>
  );
}

export default App;
