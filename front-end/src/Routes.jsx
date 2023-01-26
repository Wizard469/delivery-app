import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/User/Login';
import Products from './pages/customer/products';
import UserManager from './pages/Admin/userManager';
import SellerOrders from './pages/seller/sellerOrders';
import Checkout from './pages/customer/checkout';
import Register from './pages/User/Register';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/admin/manage" component={ UserManager } />
      <Route path="/seller/orders" component={ SellerOrders } />
    </Switch>
  );
}
