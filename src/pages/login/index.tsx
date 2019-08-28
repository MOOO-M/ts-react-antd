import React, { useState } from "react";

interface propType {
  toLogin: Function;
}

const Login: React.FC<propType> = (props: propType) => {
  function toIndex() {
    // window.history.pushState("", "", "/");
    props.toLogin(true);
  }

  return (
    <div>
      Login
    </div>
  );
};

export default Login;
