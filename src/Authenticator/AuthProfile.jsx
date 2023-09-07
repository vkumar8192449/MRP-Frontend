import React from "react";
import Dashboard from "../components/Dashboard";
import { Navigate } from "react-router-dom";

export const AuthProfile = (prop) => {
  return (
    <>
      {prop.islogin === "true" ? (
        <Dashboard />
      ) : (
        <Navigate replace to="/home" />
      )}
    </>
  );
};
