import React from 'react';
import './Footer.css';
import BottomNavBar from '../bottomnavbar/BottomNavBar';

function Footer() {
  return (
    <footer>
          <section className='about-container'>
      <div className='about'>
        <p>KATORA Digital Agency is a dynamic force in the digital landscape, blending strategic creativity with cutting-edge technology. Committed to delivering results, our diverse team of professionals specializes in web development, design, and digital marketing. </p>
      </div>
    </section>
      <BottomNavBar></BottomNavBar>
      <div className='footer-text'>
      <p>Copyright 2023, KATORA (Pty) Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;