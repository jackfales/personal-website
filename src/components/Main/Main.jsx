import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../Landing/Landing";
import About from "../About/About";

export default () => (
  <div className="App">
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/about" render={() => <About />} />
    </Switch>
  </div>
);
