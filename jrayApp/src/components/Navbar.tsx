import React from "react";
import { useState } from "react";

interface Props {
  brandimg: string;
  header: string;
  items: string[];
}

function Navbar({ brandimg, header, items }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.bhhs.com/">
            <img
              src={brandimg}
              alt="Berkshire Hathaway Homeservices"
              width="80"
              height="80"
            ></img>
          </a>
          <a className="navbar-brand">{header}</a>
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
              {items.map((item, index) => (
                <li className="nav-item" key={item}>
                  <a
                    className={
                      selectedIndex === index ? "nav-link active" : "nav-link"
                    }
                    onClick={() => {
                      setSelectedIndex(index);
                    }}
                    aria-current="page"
                    href="#"
                  >
                    {item}
                  </a>
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
