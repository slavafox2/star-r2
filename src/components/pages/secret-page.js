import React from "react";
import { Redirect } from "react-router-dom";

const SecretPage = (props) => {
  if (props.isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h4>This page only for you, my General'.</h4>
      </div>
    );
  }
  return (
    <React.Fragment>
      {console.log("this page only for My General")}
      <Redirect to="/login" />
    </React.Fragment>
  );
};

export default SecretPage;
