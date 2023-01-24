import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './pages/customer/products';
import Provider from './context/Provider';
import SellerOrders from './pages/seller/sellerOrders';

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/customer/products" component={ Products } />
        <Route exact path="/seller/orders" component={ SellerOrders } />
      </Switch>
    </Provider>
  );
}

export default App;
