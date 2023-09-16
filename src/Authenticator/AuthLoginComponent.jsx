import React from "react";
import { LoginComponent } from "../components/LoginComponent";
import { Navigate } from "react-router-dom";

export const AuthLoginComponent = (props) => {
  return (
    <>
      {props.islogin === "false" ? (
        <LoginComponent
          setislogin={props.setislogin}
          setcurrentuser={props.setcurrentuser}
        />
      ) : (
        <Navigate replace to="/home" />
      )}
    </>
  );
};

export default AuthLoginComponent;
