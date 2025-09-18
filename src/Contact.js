import React from "react";
import "./Contact.css";

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact</h2>
    <div className="contact__links">
      <a href="mailto:tyketelsen@aol.com" className="contact__link">Email</a>
      <a href="https://linkedin.com/in/tyketelsen13" className="contact__link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/tyketelsen13" className="contact__link" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="/SWE-25.pdf" className="contact__link" target="_blank" rel="noopener noreferrer">Resume</a>
      <a href="/SWECERTIFICATE.pdf" className="contact__link" target="_blank" rel="noopener noreferrer">Certifications</a>
    </div>
  </section>
);

export default Contact;
