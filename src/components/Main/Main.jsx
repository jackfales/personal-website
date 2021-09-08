import React from "react";
import { Route, Switch } from "react-router-dom";
import PortfolioWebpage from "../PortfolioWebpage/PortfolioWebpage";

export default function Main() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <PortfolioWebpage />} />
      </Switch>
    </div>
  );
};
