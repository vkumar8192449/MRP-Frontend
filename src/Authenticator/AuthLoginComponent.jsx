import React from "react";
import { LoginComponent } from "../components/LoginComponent";
import { Navigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export const AuthLoginComponent = (props) => {
  const { setcurrentuser, islogin, setislogin } = useUserContext();
  return (
    <>
      {islogin === "false" ? (
        <LoginComponent
          setislogin={setislogin}
          setcurrentuser={setcurrentuser}
        />
      ) : (
        <Navigate replace to="/home" />
      )}
    </>
  );
};

export default AuthLoginComponent;
