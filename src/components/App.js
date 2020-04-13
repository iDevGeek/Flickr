/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import IndexPage from "../pages/Index";
import NotFoundPage from "../pages/NotFound";
import PropTypes from "prop-types";
import React from "react";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
