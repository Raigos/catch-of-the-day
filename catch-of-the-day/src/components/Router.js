import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import StorePicker from "./StorePicker";
import NotFound from "./NotFound";
import App from "./App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route component={StorePicker} path="/" exact />
      <Route component={App} path="/store/:storeId" />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
