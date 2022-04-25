import React from "react";
import { Route, Redirect } from "react-router";
import { SIGN_IN, WRONG_USER_ROLE } from "../../constants/routes";
import useAuth from "./hooks/useAuth";

const PrivateRoute = ({ isAdminRoute, ...routeProps }) => {
  const { user } = useAuth();

  if (user && !user.isAdmin && isAdminRoute) {
    return <Redirect to={{ pathname: WRONG_USER_ROLE }} />;
  }

  return user ? (
    <Route {...routeProps} />
  ) : (
    <Redirect
      to={{ pathname: SIGN_IN, search: `?unauthorized&redirect=${routeProps.path}` }}
    />
  );
};

export default PrivateRoute;
