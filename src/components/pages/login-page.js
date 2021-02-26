import React from "react";
import { Redirect } from "react-router-dom";

const LoginPage = (props) => {
  if (props.isLoggedIn) {
    return <Redirect to="/secret" />;
  }

  return (
    <div className="jumbotron">
      <p>Login to see secret page, pls.</p>
      <button className="btn btn-primary" onClick={props.onLogin}>
        Login. Push button here.
      </button>
    </div>
  );
};

export default LoginPage;
