import React from "react";
import { LoginComponent } from "../components/LoginComponent";
import { Navigate } from "react-router-dom";

export const AuthLoginComponent = (prop) => {
  return (
    <>
      {prop.islogin === "false" ? (
        <LoginComponent />
      ) : (
        <Navigate replace to="/home" />
      )}
    </>
  );
};

export default AuthLoginComponent;
