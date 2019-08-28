import React from "react";

import {Route, Switch } from "react-router-dom";

import "./index.scss";

import Login from "../../pages/login/index";
import Index from "../../pages/index/index";
import About from "../../pages/about/index";

const MrouterIndex: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index}></Route>
      <Route path="/index" component={Index}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/login" component={Login}></Route>
    </Switch>
  );
};

export default MrouterIndex;
