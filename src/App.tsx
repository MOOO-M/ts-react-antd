import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.less";

import Login from "./pages/login/index";

import Mlayout from "./components/m-layout/index";
import MrouterIndex from "./components/m-router/index";

const App: React.FC = () => {
  const [islogin, setIslogin] = useState(false);
  const [isok, setIsok] = useState(false);

  useEffect(() => {
    setIslogin(true);
    setIsok(true);
  });

  // 登录返回
  function toLogin(isbool: boolean): void {
    setIslogin(isbool);
  }

  if (!islogin && isok) {
    return <Login toLogin={toLogin}></Login>;
  } else if (islogin && isok) {
    return (
      <Router>
        <Mlayout>
          <MrouterIndex></MrouterIndex>
        </Mlayout>
      </Router>
    );
  } else {
    return null;
  }
};

export default App;
