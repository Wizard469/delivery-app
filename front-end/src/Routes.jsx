import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/User/Login';
import Products from './pages/customer/products';
import UserManager from './pages/admin/userManager';
import SellerOrders from './pages/seller/sellerOrders';
import Checkout from './pages/customer/checkout';
import Register from './pages/User/Register';
import Order from './pages/customer/order';
import MyOrders from './pages/customer/myOrders';
import RedirectRouter from './component/RedirectRouter';
import SellerOrdersDetails from './pages/seller/sellerOrdersDetails';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <RedirectRouter path="/login">
        <Login />
      </RedirectRouter>
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders/:id" component={ Order } />
      <Route path="/customer/orders" component={ MyOrders } />
      <Route path="/admin/manage" component={ UserManager } />
      <Route path="/seller/orders/:id" component={ SellerOrdersDetails } />
      <Route path="/seller/orders" component={ SellerOrders } />
    </Switch>
  );
}
