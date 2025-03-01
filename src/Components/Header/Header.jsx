import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className="content">
        <h1>Phaneendra Guttula</h1>
        <p>Java Developer <span>|</span> React Enthusiast <span>|</span> Aspiring Full-Stack Developer</p>
        
        <div className='resume-socials'>
          <a href='/PhaneendraGuttula.pdf' download='Phaneendra_Guttula_Resume.pdf' className='download-btn'>
            Download Resume 
          </a>
          
          <div className='social-icons'>
            <a href='https://github.com/phani-guttula' target='_blank' rel='noopener noreferrer'>
              <img src='/github.png' alt='GitHub' className='social-icon' />
            </a>
            <a href='https://linkedin.com/in/phani-guttula' target='_blank' rel='noopener noreferrer'>
              <img src='/linkedin-logo.png' alt='LinkedIn' className='social-icon' />
            </a>
            <a href='mailto:phaniguttula25@gmail.com' target='_blank' rel='noopener noreferrer'>
              <img src='/gmail-logo.png' alt='E-Mail' className='social-icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
