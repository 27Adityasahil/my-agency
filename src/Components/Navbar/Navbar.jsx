import React from "react";
import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">ComeOnline</div>
        <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu-icon lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <div className="nav-links">
          <ul className="nav-items">
            <li className="menu">
              <a href="#">Home</a>
            </li>
            <li className="menu">
              <a href="#about">About</a>
            </li>
            <li className="menu">
              <a href="#service">Services</a>
            </li>
            <li className="menu">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="menu">
              <a href="#Pricing">Pricing</a>
            </li>
            {/* <li className="menu">
              <a href="#">Testimonials</a>
            </li> */}
            {/* <li className="menu">
              <a href="#">FAQs</a>
            </li> */}
            <button className="contact-btn btn menu">Contact</button>
          </ul>
        </div>
      </nav>
      {showMenu && (
        <div className="mobile-nav-links">
          <ul className="mobile-nav-items">
            <li className="mobile-menu">
              <a href="#">Home</a>
            </li>
            <li className="mobile-menu">
              <a href="#about">About</a>
            </li>
            <li className="mobile-menu">
              <a href="#service">Services</a>
            </li>
            <li className="mobile-menu">
              <a href="#">Portfolio</a>
            </li>
            <li className="mobile-menu">
              <a href="#Pricing">Pricing</a>
            </li>
            {/* <li className="mobile-menu">
              <a href="#">Testimonials</a>
            </li>
            <li className="mobile-menu">
              <a href="#">FAQs</a>
            </li> */}
            <button className="mobile-contact-btn btn mobile-menu">
              Contact
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
