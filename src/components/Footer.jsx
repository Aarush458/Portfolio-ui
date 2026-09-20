import React from 'react'
import { Mail } from 'lucide-react';
import githubLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930480.png';

const Footer = () => {
  return (
    <footer>
    <div className='foot'>
      <p className='foot-hero'>&lt;Thanks for stopping by!&gt;</p>
      <p className='foot-content'>I'm always open to discussing new projects, internships, or just having a good conversation about tech and AI. Let's connect.</p>
    </div>

    <div className='socials'>
        <a href="mailto:aarushgandotra26@gmail.com" target='_blank'> <Mail color= 'black' size={28} />
        </a>
        <a href="https://www.github.com/Aarush458" target='_blank' >
        <img src={githubLogo} className='social-img' id='github' alt="github" />
        </a>
        
        <a href="https://www.linkedin.com/in/aarush-gandotra-462a0225a/" target='_blank'>
        <img src={linkedinLogo} alt="linkedin" className='social-img' id='linkedin' />
        </a>
    </div>
    </footer>

  )
}

export default Footer
