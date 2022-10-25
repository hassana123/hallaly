import React from "react";
import error from "./images/404.jpg";
import "./styles/errorPage.css";
const NoMatch = () => {
  return (
    <div className="noMatch-container">
      <img src={error} alt="404" />
      <h3>YOU DON DEY CARRY US GO WHERE WE NO KNOW</h3>
    </div>
  );
};

export default NoMatch;
