// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// function PrivateRoute({
//   exact,
//   component: Component,
//   isAuthenticated,
//   isProgressLoading,
//   ...children
// }) {
//   if (isAuthenticated === true) {
//     return (
//       <Route
//         exact={exact}
//         {...children}
//         render={props => (
//           <Component {...props} isProgressLoading={isProgressLoading} />
//         )}
//       />
//     );
//   }

//   return <Redirect to="login" />
// };

// export default PrivateRoute;

import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticated } from 'utils/cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = useSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated()) {

    }

    if (!currentUser && isAuthenticated()) {
      dispatch();
    }
  });

  return (
    <Route 
      {...rest}
      render={props => 
        !isAuthenticated() ? (
          <Redirect 
            to={{
              pathname: '/signin',
              state: { from: props.location }
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
};

export default PrivateRoute;