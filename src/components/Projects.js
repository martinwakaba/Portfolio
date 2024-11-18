import React from 'react';
import image1 from '../assets/image1.jpg'
import houseHunt from '../assets/househunt.png'
import weatherApp from '../assets/weatherApp.png'
import portfolio from '../assets/portfolio.png'
import voteApp from '../assets/voteApp.png'
import edutrack from '../assets/edutrack.png'


const projectData = [

  {
    title: "House Hunt",
    link: "https://github.com/martinwakaba/house-hunt",
    image: houseHunt, 
    description: "House Hunt is a user-friendly web application designed to streamline the process of searching for your dream house.",
  },
  {
    title: "Weather App",
    link: "https://github.com/martinwakaba/weatherApp",
    image: weatherApp,
    description: "WeatherApp is a simple weather application that provides up-to-date weather information for your location.",
  },
  {
    title: "Portfolio",
    link: "https://github.com/martinwakaba/Portfolio",
    image: portfolio,
    description: "This is my portfolio project.",
  },
  {
    title: "Edutrack",
    link: "https://github.com/BarryBaros/EduTrack",
    image: edutrack,
    description: "A school management system designed to streamline the management of students, teachers and admin operations.",
  },
  {
    title: "My Vote My Voice",
    link: "https://github.com/BarryBaros/voting-app",
    image: voteApp,
    description: "This is a voting app that helps you vote from anywhere as long as you are a registered voter",
  },

];

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View on GitHub 
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
