import React from "react";
import "./Contact.css";

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact</h2>
    <div className="contact__links">
      <a href="mailto:tyketelsen@email.com" className="contact__link">Email</a>
      <a href="https://linkedin.com/in/tyketelsen" className="contact__link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/tyketelsen" className="contact__link" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="/resume.pdf" className="contact__link" target="_blank" rel="noopener noreferrer">Resume</a>
    </div>
  </section>
);

export default Contact;
