import React from "react";
import AddExperience from "../components/AddExperience.jsx";
import { Navigate } from "react-router-dom";

export const AuthAddExperience = (prop) => {
  return (
    <>
      {prop.islogin === "true" ? (
        <AddExperience />
      ) : (
        <Navigate replace to="/home" />
      )}
    </>
  );
};
