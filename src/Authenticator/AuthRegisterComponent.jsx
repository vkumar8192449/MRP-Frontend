import React from "react";
import RegisterComponent from "../components/RegisterComponent";
import { Navigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export const AuthRegisterComponent = (props) => {
  const { setcurrentuser, islogin, setislogin } = useUserContext();
  return (
    <>
      {islogin === "false" ? (
        <RegisterComponent
          setislogin={setislogin}
          setcurrentuser={setcurrentuser}
        />
      ) : (
        <Navigate replace to="/home" />
      )}
    </>
  );
};
