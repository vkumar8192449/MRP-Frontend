import React from "react";
import useUserContext from "../hooks/useUserContext";
// import "../components-style/MainNavbarRight.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

export const MainNavbarRight = (props) => {
  const { currentuser, setcurrentuser, setislogin } = useUserContext();
  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <>
      <div id="main-navbar-right">
        {props.islogin === "false" &&
        props.activelink !== "login" &&
        props.activelink !== "register" ? (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? `${props.setactivelink("login")} login-btn`
                : "login-btn"
            }
          >
            <button className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
          </NavLink>
        ) : (
          ""
        )}
        {props.islogin === "false" &&
        props.activelink !== "register" &&
        props.activelink !== "login" ? (
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? `${props.setactivelink("register")} login-btn`
                : "login-btn"
            }
          >
            <button className="inline-flex ml-6 items-center text-blue-700 bg-white hover:bg-blue-800 hover:text-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-3 py-2">
              <div>
                Sign Up  &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
          </NavLink>
        ) : (
          ""
        )}
        {props.islogin === "true" && props.activelink !== "addexperience" ? (
          <NavLink
            to="/addexperience"
            onClick={() => {
              props.setinterviewid("");
            }}
            className={({ isActive }) =>
              isActive
                ? `${props.setactivelink("addexperience")} login-btn`
                : "login-btn"
            }
          >
            <button>
              <div>
                <FontAwesomeIcon icon={faPlus} />
                &nbsp; Add Experience
              </div>
            </button>
          </NavLink>
        ) : (
          ""
        )}
        {props.islogin === "true" ? (
          <NavLink
            to="/profile/dashboard"
            className={({ isActive }) =>
              isActive
                ? `${props.setactivelink("profile/dashboard")} login-btn`
                : "login-btn"
            }
          >
            <Avatar {...stringAvatar(currentuser.user.name)} />
          </NavLink>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
