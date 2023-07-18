import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <header className="px-8 md:max-w-6xl mx-auto w-full md:py-5">
      <div className="nav-center">
        <div className="nav-header">
          <figure>
            <img src={logo} alt="" />
          </figure>
          <button onClick={() => setShowLinks(!showLinks)}>
            <AiOutlineMenu className="md:hidden text-blue absolute top-8 md:top-10 right-10 text-2xl cursor-pointer" />
          </button>
        </div>

        <div
          className={`${
            showLinks ? "links-container show-container" : "show-container"
          }`}
        >
          <ul className="links md:space-x-10 text-base text-gray">
            <li className="links">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="links">
              <Link className="link" to="/service">
                Services
              </Link>
            </li>
            <li className="links">
              <Link className="link" to="/about">
                About Us
              </Link>
            </li>
            <li className="links">
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="bg-purple links text-white px-5 py-3 rounded-md shadow-md">
              <a className="link" href="">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
