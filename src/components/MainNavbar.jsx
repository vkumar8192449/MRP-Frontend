import React from "react";
import mainlogo from "../mrp-logo.ico";
import { MainNavbarRight } from "./MainNavbarRight.jsx";
import { Link } from "react-scroll";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";

export const MainNavbar = (props) => {
  const { islogin } = useUserContext();
  const [activelink, setactivelink] = useState("");

  return (
    <nav className="relative z-20 py-4">
      <div className="flex flex-row justify-around items-center flex-wrap">
        <div>
          <a href="/home">
            <img
              src={mainlogo}
              className="hover:cursor-pointer main-nav-logo z-40 h-16 w-16 items-center "
              alt="MRP-LOGO"
            />
          </a>
        </div>
        <div className="flex items-center justify-end ">
          <input
            type="checkbox"
            name="hamburger"
            id="hamburger"
            className="peer"
            hidden
          />
          <label
            htmlFor="hamburger"
            className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
          >
            <div
              aria-hidden="true"
              className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
            ></div>
            <div
              aria-hidden="true"
              className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
            ></div>
          </label>
          <div className="peer-checked:translate-x-0 fixed inset-0 w-full translate-x-[-100%] shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 min-[0px]:bg-white lg:bg-transparent">
            <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row lg:space-x-12 space-y-8 lg:space-y-0">
              <ul
                className={`px-6 pt-32 text-gray-700 space-y-16 flex flex-col justify-center items-center lg:flex-row md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0 `}
                style={
                  props.route
                    ? { maxWidth: "100vw", visibility: "hidden" }
                    : { maxWidth: "100vw" }
                }
              >
                <Link
                  to="home"
                  className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 hover:cursor-pointer font-semibold text-lg block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent smooth: 'easeInOutQuint'  duration={500} md:hover:text-blue-700 md:p-0"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 hover:cursor-pointer font-semibold text-lg block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent smooth: 'easeInOutQuint' duration={500} md:hover:text-blue-700 md:p-0"
                >
                  About
                </Link>
                <Link
                  to="team"
                  className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 hover:cursor-pointer font-semibold text-lg block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent smooth: 'easeInOutQuint'  duration={500} md:hover:text-blue-700 md:p-0"
                >
                  Team
                </Link>
                <Link
                  to="contact"
                  className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 hover:cursor-pointer font-semibold text-lg block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent smooth: 'easeInOutQuint'  duration={500} md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </Link>
              </ul>
              <div className="lg:p-0 p-12 flex justify-center ">
                <MainNavbarRight
                  setinterviewid={props.setinterviewid}
                  islogin={islogin}
                  activelink={activelink}
                  setactivelink={setactivelink}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
