import React from 'react';
import myCv from '../assets/myCv.pdf'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="contact-me">
        <h4>Contact Me</h4>
        <p>Phone: (254) 741-985-914</p>
        <p>Email: mmwangi077@gmail.com</p>
      </div>
      <a href={myCv} download className="download-cv-btn">
          Download My CV
        </a>
    </footer>
  );
};

export default Footer;
