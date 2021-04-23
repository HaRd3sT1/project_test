import React from 'react';
import {Switch, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Index';
import PrivateRoute from "./PrivateRoute"
import paths from "./paths"

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path={paths.ROOT} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterComponent;
