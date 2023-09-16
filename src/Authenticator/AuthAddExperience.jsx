import React from "react";
import AddExperience from "../components/AddExperience.jsx";
import { Navigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext.js";

export const AuthAddExperience = (prop) => {
  const { islogin } = useUserContext();
  return (
    <>
      {islogin === "true" ? <AddExperience /> : <Navigate replace to="/home" />}
    </>
  );
};
