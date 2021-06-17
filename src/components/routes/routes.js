import React from "react";
import { Switch, Route } from "react-router-dom";
import LeadsExpansion from '../../expl';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        DASHBOARD
      </Route>
      <Route path="/about">
        ABOUT
      </Route>
      <Route exact path="/insights">
        INSIGHTS
      </Route>
      <Route path="/listings">
        LISTINGS
      </Route>
      <Route path="/ppl">
        PPL
      </Route>
      <Route path="/products/*">
        LISTINGS
      </Route>
      <Route path="/leads">
        <LeadsExpansion />
      </Route>
      <Route path="/reviews">
        REVIEWS
      </Route>
      <Route path="/resources">
        RESOURCES
      </Route>
      <Route path="/bidding">
        BIDDING
      </Route>
    </Switch>
  )
};