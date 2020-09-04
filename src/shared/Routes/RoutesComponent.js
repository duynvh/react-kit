import React from 'react';
import {Switch} from 'react-router-dom';
import routes from 'routes';
import PublicRoute from 'components/Common/PublicRoute';
import loadable from 'utils/loadable';

const RoutesComponent = () => (
  <Switch>
    {routes.publicRoutes.map(route => (
      <PublicRoute
        key={route.path}
        exact
        path={route.path}
        component={loadable(route.loader)}
      />
    ))}
  </Switch>
);

export default RoutesComponent;