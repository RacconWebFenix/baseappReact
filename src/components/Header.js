import React, { useState } from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";
import logo from '../img/logo-blue.gif'

export default function Header() {
  const [navList, setNavList] = useState("nav-list");

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
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/" >
            <img src={logo} alt={"Logo BlueEdtech"} className={'logo'}/>
          </Link>
          <div
            className={"mobile-menu"}
            onClick={HandleClickNav}
            onPointerUp={HandleNavLinks}
            >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={navList}>
            <li className={"nav-links"}>
              <Link to="/">Home</Link>
            </li>
            <li className={"nav-links"}>
            <Link to="/personagens">Personagens</Link>
            </li>
            <li className={"nav-links"}>
            <Link to="/sobre">Sobre</Link>
            </li>
            <li className={"nav-links"}>
            <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
