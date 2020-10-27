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
        <div className='about-block'>
          <h2>I design & build</h2>
          <h2>digital products</h2>
          <div className='about-block__text'> 

          </div>
          <div className='about-block__contact'>
            <p>email: 
              <a href='mailto:vpa456@gmail.com'>vpa456@gmail.com</a>
            </p>
            <p>phone: 910.795.7233</p>
            <p>github: 
              <a href='https://github.com/VPAbraham' target='_blank'>github.com/VPAbraham</a>
            </p>
            <p>linkedIn: 
              <a href='https://www.linkedin.com/in/victorpabraham/' target='_blank'>linkedin.com/in/victorpabraham/</a>
            </p>
            
          </div>
        </div>
        <img src={victorImg} alt='Headshot of Victor Abraham.'/>
      </section>
    </div>
  )
}

export default About