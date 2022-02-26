import React from 'react';
import './styles/App.scss';
import frontPage from './images/web-design-development-1.jpg';
import About from './About';
import Skills from './skills';
import Achieve from './achieve';
import Contact from './contact';
import {Link} from 'react-scroll';

const App = () => {
  
  return (
     <section id= 'app' className= 'container'>
     <div className= 'btn'>
        <button >Home</button>
        <Link to= 'about' smooth= {true} duration= {1501} ><button>About</button></Link>
        <Link to= 'skills' smooth= {true} duration= {1500} ><button>Skills</button></Link>
        <Link to= 'achieve' smooth= {true} duration= {1500} ><button>Certificates</button></Link>
        <Link to= 'contact' smooth= {true} duration= {1500} ><button>Contact</button></Link>
        </div>
        <div >
        <img src= {frontPage} alt= 'Lap' width= '100%' height=  '100%' />
        </div>
        <About />
        <Skills />
        <Achieve />
        <Contact />
     </section>
   )
}

export default App;