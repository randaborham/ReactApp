import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Nabar.module.css";

export default function Navba() {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg  w-100 ${style.navtask}`}>
        <div className="container">
          <Link className={`navbar-brand ${style.test}`} to="/">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-lg-3 text-white m-3">
              <li className="nav-item me-3">
                <NavLink className="nav-link px-2 text-white mb-2 " to="About">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link px-2 text-white mb-2 "
                  to="Portofolio"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link px-2 text-white mb-2 " to="Footer">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
