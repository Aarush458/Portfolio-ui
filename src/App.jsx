import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Menu } from 'lucide-react';
import Headshot from './assets/self-photo.jpeg'
import { Asterisk } from 'lucide-react';
import { MoveRight } from 'lucide-react';
const App = () => {
  return (
    <div>
       <Navbar/>
      <div className='main'>
     
      <div className="hero">
        <h1>Hi,
          I'm <span>Aarush.</span>
        </h1>
        <p>19 year old CS student based in Bengaluru.<br></br> Creative and always ready to learn new things.</p>
        <button>  More About Me <MoveRight/></button>
      </div>
      <Asterisk color='#009d0a' size={90}/>
      <div className="headshot-wrap">
        <img src={Headshot} alt="" className='headshot'/>
      </div>
      
      </div>
      
      <Footer/>
    </div>
  )
}

export default App
