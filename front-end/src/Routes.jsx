import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/User/Login';
import Products from './pages/customer/products';
import UserManager from './pages/Admin/userManager';
import SellerOrders from './pages/seller/sellerOrders';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/customer/products" component={ Products } />
<<<<<<< HEAD
      <Route path="/seller/orders" component={ SellerOrders } />
=======
      <Route path="/admin/manage" component={ UserManager } />
      <Route exact path="/seller/orders" component={ SellerOrders } />
>>>>>>> main-group-19
    </Switch>
  );
}
