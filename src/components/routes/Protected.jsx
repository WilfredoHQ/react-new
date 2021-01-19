import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { Route, Redirect } from "react-router-dom";

export const Protected = ({ component: Component, ...rest }) => {
  const { token } = useSelector((state) => state.auth);

  const isLogged = token;
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
