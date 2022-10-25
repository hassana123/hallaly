import React, { useState } from "react";
import "./styles/navigation.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const [navBurger, setNavBurger] = useState(false);
  return (
    <div>
      <button onClick={() => setNavBurger(!navBurger)} className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="nav-container">
        <nav className={navBurger ? "menuNav" : "mainNav"}>
          <div>
            <h1>hallaly</h1>
          </div>
          <div className="middle">
            <ul>
              <li>
                <NavLink
                  onClick={(e) =>
                    e.target.addEventListener("click") ? !navBurger : navBurger
                  }
                  className={({ isActive }) => (isActive ? "activate" : "")}
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={(e) =>
                    e.target.addEventListener("click") ? !navBurger : navBurger
                  }
                  className={({ isActive }) => (isActive ? "activate" : "")}
                  to="/users"
                >
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={(e) =>
                    e.target.addEventListener("click") ? !navBurger : navBurger
                  }
                  className={({ isActive }) => (isActive ? "activate" : "")}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="signUp">
                <NavLink>Sign Up</NavLink>
              </li>
              <li className="signIn">
                <NavLink>sign In</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
