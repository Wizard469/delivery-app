import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/User/Login';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={ Login } />
        </Switch>
      </div>
    );
  }
}
