import React, { useState } from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";
import logo from "../img/logo-blue.gif";

export default function Header() {
  const [navList, setNavList] = useState("nav-list");
  const [mobileMenu, setMobileMenu] = useState("mobile-menu");

  const HandleNavLinks = () => {
    const navLinks = document.querySelectorAll(".nav-links");
    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  };

  const HandleClickNav = () => {
    if (navList === "nav-list") {
      setNavList(navList.replace(navList, "nav-list active"));
    } else {
      setNavList(navList.replace(navList, "nav-list"));
    }
    if (mobileMenu === "mobile-menu") {
      setMobileMenu(mobileMenu.replace(mobileMenu, "mobile-menu active"));
    } else {
      setMobileMenu(mobileMenu.replace(mobileMenu, "mobile-menu"));
    }
  };

  return (
    <div className="bgteste">
      <header>
        <nav>
          <Link to="/">
            <img src={logo} alt={"Logo BlueEdtech"} className={"logo"} />
          </Link>
          <div
            className={mobileMenu}
            onClick={HandleClickNav}
            onPointerUp={HandleNavLinks}
          >
            <div className={"line1"}></div>
            <div className={"line2"}></div>
            <div className={"line3"}></div>
          </div>
          <ul className={navList}>
            <li className={"nav-links"}>
              <Link to="/">Home</Link>
            </li>
            <li className={"nav-links"}>
              <Link to="/skycraper">Skycrapers</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
