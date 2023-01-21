import React from "react";
import './styles/contact.scss';
import {FaAngleUp, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';
import { Link } from "react-scroll";

const Contact = () => {
    return (
        <div>
             <div className= 'contact'>
                   <h1>Contact</h1>
                   <div className= 'ct-1'>
                       <h2>Mail me and I'll get back to you in 24 hours.</h2>
                       <h3>shashwathgowda93@gmail</h3>
                   </div>
                   </div>
                   <div className= 'ct-2'>
                     <Link to= 'app' smooth= {true} duration= {1500}><FaAngleUp 
                     style={{paddingTop: '20px', fontSize: '68px'}} /></Link>
                     <div className= 'ct-3'>
                         <a href="https://www.linkedin.com/in/shashwath-kr-1980471b5/"><FaLinkedin /></a>
                         <a href="https://github.com/shashwath-KR"><FaGithub /></a>
                         <a href= "https://www.facebook.com/shashwath.gowda.8/"><FaFacebook /></a>
                     </div>
                     <hr />
                     <p>© 2022 - developed by shashwath</p>
                   </div>
                   </div>
        
    )
}

export default Contact;