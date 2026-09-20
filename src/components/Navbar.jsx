import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';



const Navbar = () => {

  const [hamburger, setHamburger] = useState('sidebar')

  const handleHamburger  = () => {
      setHamburger('sidebar open');
  }

  const handleClose = () => {
    setHamburger('sidebar');
  }
  return (
    <>
    <div className='nav'>
      <div className="nav1">
        <a className='nav-name' href=""><ArrowUpRight color='#1B5E20' size={30} strokeWidth={2.5}/></a>
      </div>
      <div className="nav2">
           <a className='nav-items wide-screen' href=''>About</a>
           <a className='nav-items wide-screen' href=''>Projects</a>
           <a className='nav-items wide-screen' href=''>Achievements</a>
          <button className='menu' onClick={handleHamburger} ><Menu color='#1B5E20' /></button>
      </div>
    </div>
   
      <div className={hamburger}>
            <button className='nav-items sidebar-items cross' href='' onClick={handleClose}><X color='#1B5E20'/></button>
           <a className='nav-items sidebar-items' href=''>About</a>
           <a className='nav-items sidebar-items' href=''>Projects</a>
           <a className='nav-items sidebar-items' href=''>Achievements</a>   
      </div>

    </>
  )
}

export default Navbar
