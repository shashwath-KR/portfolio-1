import React from "react";
import "./styles/skills.scss";
import Skull from './images/skl.jpg';
import Tilty from 'react-tilty';

const Skills = () => {
    return (
        <div className= 'skills'>
      <h1>Skills</h1>
      <div className= 'skill-1'>
      <div className= 'skl'>
     <ul>
        <li>CSS3, HTML5 and Javascript(ES5 + 6) languages with React library</li>
        <li>JSX, Javascript Fundamentals +ES6, ReactJS, Node JS, Sass, PostgreSQL</li>
         <li>Node Package Management NPM, Redux, Hooks, GitHub repository</li>
         <li>Hands on experience in APIs, REST APIs, Json & building a server with Express</li>
          <li>Knowledge of building a responsive websites with Flexbox, Bootstrap frameworks</li>
         <li>Knowledge of continuous testing , trouble shooting and integration</li>
         <li>Front-end tools Bebel, webpack,Eslint, NPM</li>
          <li>Windows operating system and have knowledge of windows terminal</li>
           <li>Knowledge of WordPress software</li>
          </ul>
          </div>
          <Tilty className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 350 }} >
         <div className="Tilt-inner"><img src= {Skull} alt= 'head' width= '490px' height= '440px' /></div>
      </Tilty>
      </div>
      </div>
    )
}

export default Skills;