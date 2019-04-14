import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Calendar from "./containers/Calendar";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/calendar" exact component={Calendar} />
    {/* Catch all unmatched routes if all routes have failed or can't find the routes */}
    <Route component={NotFound} />
  </Switch>;