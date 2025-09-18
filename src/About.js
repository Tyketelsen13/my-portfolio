import React from "react";
import "./About.css";
// import profilePic from "./profile.jpg"; // Uncomment and add your photo if desired

const About = () => (
  <section className="about" id="about">
    <div className="about__container">
      {/* <img src={profilePic} alt="Ty Ketelsen" className="about__photo" /> */}
      <div className="about__text">
        <h2>About Me</h2>
        <p>
          I’m a software developer with a background in customer service. After completing a coding bootcamp, I’ve been building full-stack projects to strengthen my skills. I enjoy solving real-world problems with clean, scalable code.
        </p>
        <p>
          I’m passionate about learning new technologies and collaborating with others to create impactful applications.
        </p>
      </div>
    </div>
  </section>
);

export default About;
