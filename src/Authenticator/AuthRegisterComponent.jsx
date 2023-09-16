import React from "react";
import RegisterComponent from "../components/RegisterComponent";
import { Navigate } from "react-router-dom";

export const AuthRegisterComponent = (props) => {
  return (
    <>
      {props.islogin === "false" ? (
        <RegisterComponent
          setislogin={props.setislogin}
          setcurrentuser={props.setcurrentuser}
        />
      ) : (
        <Navigate replace to="/home" />
      )}
    </>
  );
};
