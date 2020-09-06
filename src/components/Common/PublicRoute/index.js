// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// function PublicRoute({
//   exact,
//   component: Component,
//   isAuthenticated,
//   isProgressLoading,
//   ...children
// }) {
//   return (
//     <Route
//       exact={exact}
//       render={props =>
//         isAuthenticated ? (
//           <Redirect to="/" />
//         ) : (
//           <Component {...props} {...children} />
//         )
//       }
//     />
//   );
// }

// export default PublicRoute;
import React from 'react'
import { Route } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => <Component {...props} />} />
}

export default PublicRoute
