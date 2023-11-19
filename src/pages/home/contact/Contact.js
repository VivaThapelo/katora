import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id='contact' className='contact-container'>
      <div className='contact'>
      <iframe title='google maps kataro contact adress' className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.491211198064!2d28.152610476430112!3d-26.407620472291267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951d09629ca199%3A0xa76e1c9c638a8e43!2s12907%20Budlelwano%20St%2C%20Palm%20Ridge%2C%20Katlehong%2C%201488!5e0!3m2!1sen!2sza!4v1699987149997!5m2!1sen!2sza" 
      width="600" height="450" 
      allowFullScreen={true} 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>

        <div className='contact-item address'>
        <h3>Address</h3>
          <p>12907 Budlelwano Street</p> 
          <p>Palm Ridge, Katlehong</p>
          <p>1458</p>
          <h3>Phone</h3>
          <p>0649047642</p>
        </div>
        </div>

    </section>
  );
}

export default Contact;