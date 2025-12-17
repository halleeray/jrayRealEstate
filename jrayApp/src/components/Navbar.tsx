import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { NavItem } from "../types/NavItem";

interface Props {
  brandimg: string;
  header: string;
  items: NavItem[];
}

function Navbar({ brandimg, header, items }: Props) {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.bhhs.com/">
            <img src={brandimg} alt="Berkshire Hathaway Homeservices"></img>
          </a>
          <Link to="/" className="navbar-brand">
            {header}
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {items.length === 0 && <p></p>}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {items.map((item) => (
                <li className="nav-item" key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
