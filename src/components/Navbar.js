import React, { useState } from "react";

const Navbar = () => {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <nav className="bg-brown-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <a href="#" className="text-white text-lg font-bold">
           Gravel Geo  
          </a>
        </div>
        <div className="lg:hidden">
          <button
            className="text-white text-xl focus:outline-none"
            onClick={toggleProjects}
          >
            <svg
              className="h-8 w-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-9a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0v-3zm1-6a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1zm6 4a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
              />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center ${
            showProjects ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                href="#"
                className="px-3 py-2 flex items-center text-lg font-semibold text-white hover:bg-brown-800 rounded-md"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="px-3 py-2 flex items-center text-lg font-semibold text-white hover:bg-brown-800 rounded-md"
              >
                About Us
              </a>
            </li>
            <li className="nav-item relative">
              <button
                onClick={toggleProjects}
                className="px-3 py-2 flex items-center text-lg font-semibold text-white hover:bg-brown-800 rounded-md focus:outline-none"
              >
                Projects
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 18a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 6a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showProjects && (
                <ul className="absolute top-full left-0 w-full bg-brown-900 py-2 rounded-md shadow-md">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-lg text-white hover:bg-brown-800"
                    >
                      Sites
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-lg text-white hover:bg-brown-800"
                    >
                      Full Designs
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="px-3 py-2 flex items-center text-lg font-semibold text-white hover:bg-brown-800 rounded-md"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
