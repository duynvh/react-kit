import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function AuthRoute({
  exact,
  component: Component,
  isAuthenticated,
  ...children
}) {
  return (
    <Route
      exact={exact}
      render={props =>
        !isAuthenticated && children.path === '/signin' ? (
          <Redirect to="/signin" />
        ) : (
          <Component {...props} {...children} />
        )
      }
    />
  )
}

export default AuthRoute
