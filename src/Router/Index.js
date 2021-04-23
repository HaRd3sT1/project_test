import React from 'react';
import {Switch, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Index';
import Repositories from '../pages/Repositories/Index';
import Bookmarks from '../pages/Bookmarks/Index';
import Users from '../pages/Users/Index';
import PrivateRoute from "./PrivateRoute"
import paths from "./paths"

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path={paths.BOOKSMARK} component={Bookmarks} />
        <PrivateRoute path={paths.USERS} component={Users} />
        <PrivateRoute path={paths.REPOSITORIES} component={Repositories} />
        <PrivateRoute path={paths.ROOT} component={Home} />
        <PrivateRoute component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterComponent;
