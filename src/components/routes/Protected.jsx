import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

export const Protected = ({ component: Component, ...rest }) => {
  const isLogged = false;
  return (
    <Route
      {...rest}
      component={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

Protected.propTypes = {
  component: PropTypes.func.isRequired,
};
