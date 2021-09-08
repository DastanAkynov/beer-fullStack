import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import EditProducts from './pages/EditProducts/EditProducts';
import LocationPage from './pages/LocationPage/LocationPage';

import OrdersPage from './pages/OrdersPage';

export const useRoutes = (isAuthenticated, role) => {
  if (isAuthenticated && role ==='ADMIN') {
    return (
      <Switch>
        <Route path="/products/create" exact component={CreatePage} />
        <Route path="/edit" exact component={EditPage} />
        <Route path="/orders" exact component={OrdersPage} />
        <Route path="/products/edit" exact component={EditProducts} />
        <Route to="/auth" exact component={AuthPage} />
        <Redirect to="/auth"/>
      </Switch>
    );
  } 

  if (isAuthenticated && role === 'AGENT') {
    return (
      <Switch>
        <Route path="/location" exact component={LocationPage} />
        <Route to="/auth" exact component={AuthPage} />
        <Redirect to="/auth"/>
      </Switch>
    );
  } 
  
  return (
    <Switch>
      <Route to="/auth" exact component={AuthPage} />
      <Redirect to="/auth"/>
  </Switch>
  )
}
