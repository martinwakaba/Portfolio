import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MW</h1>
      <ul>
         <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
