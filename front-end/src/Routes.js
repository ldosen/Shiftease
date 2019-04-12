import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    {/* Catch all unmatched routes if all routes have failed or can't find the routes */}
    <Route component={NotFound} />
  </Switch>;