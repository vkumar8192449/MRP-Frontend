import React from "react";
import "../components-style/MainBackWall.css";
import FrontModel from "../front-model.png";

export const MainBackWall = () => {
  return (
    <>
      <div id="mainbackwall">
        <div className="mainbackwall-left"></div>
        <div className="mainbackwall-right"></div>
        <div className="hero-section-image">
          <img src={FrontModel} alt="" />
        </div>
      </div>
    </>
  );
};
