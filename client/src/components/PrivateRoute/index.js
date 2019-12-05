import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'

export default function PrivateRoute({
  component: Component,
  authenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} {...rest} />
        ) : (
            <Redirect to={ROUTES.SIGN_IN} />
      )
    }
    />
  );
}