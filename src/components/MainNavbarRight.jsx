import React from "react";
import useUserContext from "../hooks/useUserContext";
import "../components-style/MainNavbarRight.css";
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
            <button>Log In</button>
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
            <button>
              <div>
                Join the Community &nbsp;
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
