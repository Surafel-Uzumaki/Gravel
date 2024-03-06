import React, { useState } from "react";

const Navbar = () => {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="navbar navbar- bg-base-100 shadow-md">
      <div className="flex justify-center align-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleProjects}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${showProjects ? 'block' : 'hidden'}`}
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a onClick={toggleProjects}>Projects</a>
              <ul className={`p-2 ${showProjects ? 'block' : 'hidden'}`}>
                <li>
                  <a>Sites</a>
                </li>
                <li>
                  <a>Full Designs</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Telsem Consulting Plc</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex-auto justify-center px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>Projects</summary>
              <ul className="p-2 z-20">
                <li>
                  <a>Sites</a>
                </li>
                <li>
                  <a>Full Designs</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
