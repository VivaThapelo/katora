// hero component with image, title and subtitle
import React from 'react';
import './Hero.css';
import { Button } from '@mui/material';

function Hero() {
  const goToForm = () => {
    window.location.href = 'https://us21.list-manage.com/contact-form?u=ccc4df8518811b87873754337&form_id=7ee9ef19171aec488989a8ff2360a43d';
  };
  return (
    <>
    <div className="hero-container">
      <div className='hero-item text'>
        <h1>KTR Consulting.</h1>
        <div className='hero-subtitle'>
        <p>We offer a wide range of quality digital services.</p>
        <p>With over 10 years of providing digital services in the industry.</p>
        <p>Let our team of experts will help you achieve your goals.</p>
        </div>
        <Button onClick={goToForm} className='hero-button' variant='outlined'>Get A Quote</Button>
      </div>
      <div className='hero-item description'>
        <h2>Best digital agency in South Africa.</h2>
      </div>
    </div>
    
    </>
  );
}

export default Hero;