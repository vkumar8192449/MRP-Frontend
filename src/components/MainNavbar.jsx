import React from "react";
import mainlogo from "../mrp-logo.ico";
// import "../components-style/MainNavbar.css";
import { MainNavbarRight } from "./MainNavbarRight.jsx";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";

export const MainNavbar = (props) => {
  const { islogin } = useUserContext();
  const [activelink, setactivelink] = useState("");
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div id="mainnavbar" className="flex flex-wrap justify-around items-center">
          <div className="flex items-center">
            <Link to="/home">
              <img src={mainlogo} className="main-nav-logo scale-50" alt="MRP-LOGO" />
            </Link>
            <div className="navbar-links flex flex-row">
              <div
                className={`${activelink === "home" ? "navbar-link-active" : ""}`}
              >
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? `${setactivelink("home")} navbar-L` : "navbar-L"
                  }
                >
                  Home
                </NavLink>
              </div>
              <div
                className={`${activelink === "about" ? "navbar-link-active" : ""
                  }`}
              >
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? `${setactivelink("about")} navbar-L` : "navbar-L"
                  }
                >
                  About
                </NavLink>
              </div>
              <div
                className={`${activelink === "blog" ? "navbar-link-active" : ""}`}
              >
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? `${setactivelink("blog")} navbar-L` : "navbar-L"
                  }
                >
                  Blog
                </NavLink>
              </div>
              <div
                className={`${activelink === "contact" ? "navbar-link-active" : ""
                  }`}
              >
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? `${setactivelink("contact")} navbar-L` : "navbar-L"
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <MainNavbarRight className="flex"
            setinterviewid={props.setinterviewid}
            islogin={islogin}
            activelink={activelink}
            setactivelink={setactivelink}
          />
        </div>
      </nav>
    </>
  );
};
