import React from "react";
import RegisterComponent from "../components/RegisterComponent";
import { Navigate } from "react-router-dom";

export const AuthRegisterComponent = (prop) => {
  return (
    <>
      {prop.islogin === "false" ? (
        <RegisterComponent />
      ) : (
        <Navigate replace to="/home" />
      )}
    </>
  );
};
