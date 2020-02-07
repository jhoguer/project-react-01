import React from 'react';
import '../styles/components/About.styl';

const About = () => {
  return (
    <div className='About'>
      <h1 className='About-title'>Jhon Guerrero</h1>
      <h3 className='About-job-title'>Backend Developer</h3>
      <div className='About-data'>
        <span className='About-item'>tekefono</span>
        <span className='About-item'>email</span>
        <span className='About-item'>website</span>
        <span className='About-item'>address</span>
      </div>
    </div>
  );
};

export default About;
