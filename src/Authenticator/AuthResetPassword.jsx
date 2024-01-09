import React from "react";
import ResetPassword from "../components/ResetPassword";
import { Navigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export const AuthResetPassword = (props) => {
  const { setcurrentuser, islogin, setislogin } = useUserContext();
  return (
    <>
      {islogin === "false" ? (
        <ResetPassword
          setislogin={setislogin}
          setcurrentuser={setcurrentuser}
        />
      ) : (
        <Navigate replace to="/home" />
      )}
    </>
  );
};
