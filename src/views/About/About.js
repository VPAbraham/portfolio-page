import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import victorImg from '../../assets/images/victor.jpeg';


const About = () => {
  return (
    <div className='about'>
      <p>ABOUT PAGE</p>
      <Link to='/'>BACK</Link>
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