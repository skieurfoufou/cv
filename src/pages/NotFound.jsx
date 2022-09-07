import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Sorry, this page doesn't exist</h3>
        <NavLink to="/">
          <i className="fas fa-home"></i>
          <span> Home</span>
        </NavLink>
      </div>
    </div>
  );
}
export default NotFound;
