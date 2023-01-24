import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/User/Login';
import Products from './pages/customer/products';
import SellerOrders from './pages/seller/sellerOrders';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/seller/orders" component={ SellerOrders } />
    </Switch>
  );
}
