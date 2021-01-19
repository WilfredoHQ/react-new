import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

export const Public = ({ component: Component, ...rest }) => {
  const isLogged = false;
  return (
    <Route
      {...rest}
      component={(props) =>
        isLogged ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

Public.propTypes = {
  component: PropTypes.func.isRequired,
};
