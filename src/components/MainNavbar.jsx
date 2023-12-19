import React from "react"; import mainlogo from "../mrp-logo.ico";
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
    <nav className="py-4">
      <div className="flex flex-row justify-around items-center flex-wrap">
        <div>
          <Link to="/home">
            <img src={mainlogo} className="main-nav-logo h-16 w-16 items-center" alt="MRP-LOGO" />
          </Link>
        </div>
        <div className="flex flex-row items-center ">
          <NavLink to="/home" className="font-semibold text-lg block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"> Home </NavLink>
          <NavLink to="/about" className="font-semibold text-lg block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"> About </NavLink>
          <NavLink to="/team" className="font-semibold text-lg block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"> Team </NavLink>
          <NavLink to="/contact" className="font-semibold text-lg block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"> Contact </NavLink>
        </div>
        <div className="-mr-36 ">
          <MainNavbarRight className="" setinterviewid={props.setinterviewid} islogin={islogin} activelink={activelink} setactivelink={setactivelink} />
          {/* <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button> */}
        </div>
      </div>
      </nav>
    </>
  );
};