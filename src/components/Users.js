import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./styles/users.css";

const Users = () => {
  return (
    <div className="container">
      <nav className="usersNav">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activate" : "")}
              to="allMaleUsers"
            >
              Male Users
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "activate" : "")}
              to="femaleUsers"
            >
              Female Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Users;
