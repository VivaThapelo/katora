import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id='services' className='services-container'>
    <div className='services'>
      <div className='service'>
        <h3>Business Development</h3>
        <p>
          We provide assistance with business services, helping you navigate the legal and administrative requirements to start your own business.
        </p>
      </div>
      <div className='service'>
        <h3>Web Development</h3>
        <p>
          Our team of skilled designers will create a stunning and user-friendly website that represents your brand and attracts customers.
        </p>
      </div>
      <div className='service'>
        <h3>Mobile Development</h3>
        <p>
          We specialize in developing high-quality mobile applications for iOS and Android platforms, tailored to meet your specific requirements.
        </p>
      </div>
      <div className='service'>
        <h3>Software Development</h3>
        <p>
          Our experienced developers will build custom software solutions to automate your business processes and improve efficiency.
        </p>
      </div>
    </div>
    </section>
  );
}

export default Services;