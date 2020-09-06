import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import routes from 'routes'
import AuthRoute from 'components/Common/AuthRoute'
import PublicRoute from 'components/Common/PublicRoute'
import loadable from 'utils/loadable'
import Can from 'utils/can'
import { isAuthenticated } from 'utils/cookie'

const RoutesComponent = () => (
  <Switch>
    {routes.authRoutes.map(route => (
      <AuthRoute
        key={route.path}
        exact
        path={route.path}
        isAuthenticated={isAuthenticated}
        component={loadable(route.loader)}
      />
    ))}

    {routes.errorRoutes.map(route => (
      <Route
        key={route.path}
        exact
        path={route.path}
        component={loadable(route.loader)}
      />
    ))}

    {routes.publicRoutes.map(route => (
      <Can
        key="admin"
        role="admin"
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
)

export default RoutesComponent
