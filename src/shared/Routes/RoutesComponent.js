import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from 'routes';
import PublicRoute from 'components/Common/PublicRoute';
import loadable from 'utils/loadable';
import Can from "utils/can";

const RoutesComponent = () => (
  <Switch>
    {routes.publicRoutes.map(route => (
      <Can
        role="visitor"
        perform="products:visit"
        yes={() => (
          <PublicRoute
            key={route.path}
            exact
            path={route.path}
            component={loadable(route.loader)}
          />
        )}
        no={() => <Redirect to="/" />}
      />
    ))}
  </Switch>
);

export default RoutesComponent;