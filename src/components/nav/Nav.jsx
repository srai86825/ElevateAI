import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./nav.css";
import logo from "../../assets/logo.svg";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => {
    return (
      <>
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#wElevate">What is ElevateAI?</a>
        </p>
        <p>
          <a href="#possibility">GPT-4</a>
        </p>
        <p>
          <a href="#features">Case Studies</a>
        </p>
        <p>
          <a href="#blog">Library</a>
        </p>
      </>
    );
  };

  return (
    <div className="elevate__navbar">
      <div className="elevate__navbar-links">
        <div className="elevate__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="elevate__navbar-links_container">{<Menu />}</div>
      </div>
      <div className="elevate__navbar-sign">
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>

      <div className="elevate__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="elevate__navbar-menu_container scale-up-center">
            <div className="elevate__navbar-menu_container-links">
              <Menu />
              <div className="elevate__navbar-menu_container-sign">
                <p>Sign In</p>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
