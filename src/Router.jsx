import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Authentication} />
        <Route exact path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
