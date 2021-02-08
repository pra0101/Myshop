import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/home/Home.jsx';
import OrderStatus from '../components/orderStatus/OrderStatus.jsx';
import OrderDetails from '../components/orderStatus/OrderDetails.jsx';

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <RouteLists />
      </HashRouter>
    );
  }
}

class RouteLists extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={props => {
           return <Home {...props} />;
        }} />
        <Route exact path="/orderstatus" render={props => {
           return <OrderStatus {...props} />;
        }} />
        <Route exact path="/orderdetails/:orderId" render={props => {
           return <OrderDetails {...props} />;
        }} />
        <Route exact path="*">
          <Redirect to={{pathname: '/'}}/>
        </Route>
      </Switch>
    )
  }
}