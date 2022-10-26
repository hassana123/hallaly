import React from "react";
import "./styles/errorPage.css";
const ErrorDetect = ({ error }) => {
  return (
    <div className="detect-error">
      <p>{error.message}</p>
      <p>An Error Occured Somewhere</p>
    </div>
  );
};

export default ErrorDetect;
