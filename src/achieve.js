import React from "react";
import "./styles/achieve.scss";
import Web from './images/web.jpg';
import Tilty from 'react-tilty';


const Achieve = () => {
    return (
        <div className= 'achieve'>
      <h1>Certificates</h1>
      <div className= 'achieve-1'>
      <Tilty className="Tilt-1" options={{ max : 25 }} style={{ height: 350, width: 550 }} >
         <div className="Tilt-inner"><img src= {Web} alt= 'head' width= '550px' height= '350px' /></div>
      </Tilty>
          <div className= 'ach'>
          <ul>
        <li>Zero to Mastery Complete Web Development from "Udemy".</li>
        <li>Presented paper on our project in “National Conference” at AIT, college</li>
        <li>Won 2nd best paper award in “National Conference on Emerging Trends in Mechanical Engineering”at AIT</li>
          </ul>
     </div>
      </div>
      </div>
    )
}

export default Achieve;