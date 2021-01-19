import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Public } from "./Public";
import { Protected } from "./Protected";
import { About } from "components/pages/About/About";
import { Home } from "components/pages/Home/Home";
import { Login } from "components/pages/Login/Login";
import { NotFound } from "components/pages/NotFound/NotFound";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={About} />

        <Public path="/login" exact component={Login} />

        <Protected path="/home" exact component={Home} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
