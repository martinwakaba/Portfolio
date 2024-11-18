// src/components/Header.js
import React from 'react';
import githubLogo from '../assets/github.png'
import instagramLogo from '../assets/instagram.png'
import linkedinLogo from '../assets/linkedin1.png'
import twitterLogo from '../assets/twitter.png'



const Home = () => {
  return (
    <header className="header">
      <div className="header-text">
        <h1>Hello, it's Martin Wakaba</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I am a full-stack developer with a solid foundation in both front-end and back-end technologies. My skills include front-end development with React, HTML, CSS, and JavaScript, as well as back-end development using Flask and Python. I am driven by a passion for creating innovative solutions that not only foster business growth but also provide outstanding user experiences. My ambition is to continuously explore the limits of technology, crafting impactful, user-focused products that make a lasting impression in the digital world.
        </p>
        <a
      href="https://www.linkedin.com/in/martin-wakaba-835045205/" 
      target="_blank"
      rel="noopener noreferrer"
        >
      <img
        src={linkedinLogo}
        alt="LinkedIn"
        style={{
          width: '30px',   
          height: '30px',  
          transition: 'transform 0.3s ease',  
          margin: '10px 8px',
        }}
        className="linkedin-logo"
      />
      
       </a>

       <a
      href="https://www.instagram.com/w.akaba/" 
      target="_blank"
      rel="noopener noreferrer"
        >
      <img
        src={instagramLogo}
        alt="Instagram"
        style={{
          width: '30px',   
          height: '30px',  
          transition: 'transform 0.3s ease',  
          margin: '10px 8px',

        }}
        className="instagram-logo"
      />
       </a>

       <a
      href="https://github.com/martinwakaba" 
      target="_blank"
      rel="noopener noreferrer"
        >
      <img
        src={githubLogo}
        alt="Github"
        style={{
          width: '30px',   
          height: '30px',  
          transition: 'transform 0.3s ease',  
          margin: '10px 8px',
        }}
        className="github-logo"
      />
       </a>

       <a
      href="https://x.com/WakabaMartinnn" 
      target="_blank"
      rel="noopener noreferrer"
        >
      <img
        src={twitterLogo}
        alt="Twitter"
        style={{
          width: '25px',   
          height: '25px',  
          transition: 'transform 0.3s ease',  
          margin: '10px 8px',
        }}
        className="github-logo"
      />
       </a>

      </div>
    </header>
  );
};

export default Home;
