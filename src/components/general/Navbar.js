import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontweight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
      backgroundColor: isActive ? "green" : "white",
      color: isActive ? "white" : "black",
    };
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>
            ...Practice React...
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink style={navLinkStyles} className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navLinkStyles}
                  className="nav-link "
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      style={navLinkStyles}
                      className="dropdown-item"
                      to={"/text"}
                    >
                      Text App
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={navLinkStyles}
                      className="dropdown-item"
                      to={"/movies"}
                    >
                      Movies
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      style={navLinkStyles}
                      className="dropdown-item"
                      to={"/incdec"}
                    >
                      Inc/Dec
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navLinkStyles}
                  to={"/apidata"}
                  className="nav-link"
                >
                  Employee List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navLinkStyles}
                  to={"/users"}
                  className="nav-link"
                >
                  Users
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
