import React from "react";
import "./Hero.css";

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero__content">
      <h1 className="hero__headline">
        Hi, I’m Ty — a junior software developer passionate about building user-friendly applications.
      </h1>
      <p className="hero__subtext">
        Currently seeking entry-level software engineering roles.
      </p>
      <a className="hero__cta" href="#projects">View Projects</a>
    </div>
  </section>
);

export default Hero;
