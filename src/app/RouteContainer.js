import React from "react";
import { Route, Switch } from "react-router-dom";
import MainContainer from "../international-table/MainContainer";

const RouteContainer = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        {/* Addition Table Route to be placed here */}
      </Switch>
    </div>
  );
};

export default RouteContainer;
