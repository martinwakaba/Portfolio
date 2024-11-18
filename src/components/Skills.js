import React from 'react';
import htmlLogo from '../assets/html5.png';
import reactLogo from '../assets/react.png';
import flaskLogo from '../assets/flask.png';
import pythonLogo from '../assets/python.png';
import postgresqlLogo from '../assets/postgresql.png';
import cssLogo from '../assets/css3.png';
import jsLogo from '../assets/js.png';
import tailwindLogo from '../assets/tailwind.png';
import sqlLogo from '../assets/sql.png';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="technologies-images">
        <img src={htmlLogo} alt="HTML" />
        <img src={cssLogo} alt="CSS" />
        <img src={jsLogo} alt="JavaScript" />
        <img src={reactLogo} alt="React" />
        <img src={flaskLogo} alt="Flask" />
        <img src={pythonLogo} alt="Python" />
        <img src={sqlLogo} alt="SQL" />
        <img src={postgresqlLogo} alt="PostgreSQL" />
        <img src={tailwindLogo} alt="Tailwind CSS" />
      </div>
    </section>
  );
};

export default Skills;
