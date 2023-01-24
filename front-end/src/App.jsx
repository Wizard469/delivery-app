import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './pages/customer/products';

function App() {
  return (
    <Switch>
      <Route path="/customer/products" component={ Products } />
    </Switch>
  );
}

export default App;
