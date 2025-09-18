import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__name">Tiace Ketelsen</div>
      <nav className="header__nav">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
