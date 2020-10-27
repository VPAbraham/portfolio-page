import React from 'react';
import './About.scss';
import '../Resume/Resume.scss';
import { Link } from 'react-router-dom';
import victorImg from '../../assets/images/victor.jpeg';


const About = () => {
  return (
    <div className='about'>
      <Link to='/' className='resume-link about-back'>GO BACK</Link>
      <section>
        <div>
          <h2>I design & build</h2>
          <h2>digital products</h2>
        </div>
        <img src={victorImg} alt='Headshot of Victor Abraham.'/>
      </section>
    </div>
  )
}

export default About