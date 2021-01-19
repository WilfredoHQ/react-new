import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { Route, Redirect } from "react-router-dom";

export const Public = ({ component: Component, ...rest }) => {
  const { token } = useSelector((state) => state.auth);

  const isLogged = token;
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
