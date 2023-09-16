import React from "react";
import Dashboard from "../components/Dashboard";
import { Navigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

export const AuthProfile = (prop) => {
  const { islogin } = useUserContext();
  return (
    <>{islogin === "true" ? <Dashboard /> : <Navigate replace to="/home" />}</>
  );
};
