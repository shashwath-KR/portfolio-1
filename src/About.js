import React from "react";
import Profile from './images/profile.jpg';
import { Link } from "react-scroll";

const About = () => {
    return (
        <header  className= 'about'>
        <div className= 'btn-1'>
            <h1>Hi, I am <i>Shashwath</i><br />
               the Developer you've been searching.</h1>
               <Link to='hire' smooth= {true} duration= {1500} >
               <div className= 'btn-2'><button className= 'bton'>Hire me.</button></div></Link>
               </div>
               <div className= 'about-1'>
                   <h1>About me</h1>
                   <div className= 'profile'>
                       <img src= {Profile} alt= 'man' width= '250px' height= '220px' />
                       <p id='hire'>To achieve high carrier growth through a continuous learning process and keep myself 
                        dynamic, visionary and competitive with the changing scenario of theworld</p>
                   </div>
               </div>
        </header>
    )
}

export default About;