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
    name=name.trim();
    return {
      children: !name.includes(" ") ? `${name.split(" ")[0][0]}` : `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  const closeNavbar = () => {
    document.getElementById("hamburger").checked = false;
  };
  return (
    <>
      <div id="main-navbar-right" className="flex flex-col justify-center items-center lg:flex-row text-lg lg:text-base lg:space-x-8">
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
            <button className="flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2">Log In</button>
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
            <button className="flex justify-center mt-8 lg:mt-0 text-blue-700 bg-white hover:bg-blue-800 hover:text-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-3 py-2 lg:border-0 border-[0.5px] border-gray-400">
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
              closeNavbar();
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
            onClick={closeNavbar}
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
