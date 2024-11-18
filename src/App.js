import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';

function App() {

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);




  return (
    <div className="App">

      <main>
        <Navbar />
        <section id="home" className="fade-in">
          <Home />
        </section>
        <section id="about" className="fade-in">
          <About />
        </section>
        <section id="skills" className="fade-in">
          <Skills />
        </section>
        <section id="projects" className="fade-in">
          <Projects />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
