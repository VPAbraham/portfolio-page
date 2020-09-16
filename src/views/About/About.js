import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import victorImg from '../../assets/images/victor.jpeg';


const About = () => {
  return (
    <div className='about'>
      <p>ABOUT PAGE</p>
      <Link to='/'>BACK</Link>
      <img src={victorImg} alt='Headshot of Victor Abraham.'/>
    </div>
  )
}

export default About