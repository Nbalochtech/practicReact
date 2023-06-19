import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const linkHandl = ({ isActive }) => (isActive ? "active" : "");
  return (
    <div>
      <h1>Home Page</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className={"nav-link " + linkHandl}
            aria-current="page"
            to={"/pic"}
          >
            Pictures
          </Link>
        </li>
        <li className="nav-item">
          <Link className={"nav-link " + linkHandl} to={"/song"}>
            Songs
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Home;
