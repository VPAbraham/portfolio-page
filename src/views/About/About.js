import React from 'react';
import './About.scss';
import '../Resume/Resume.scss';
import { Link } from 'react-router-dom';
import victorImg from '../../assets/images/victor.jpeg';


const About = () => {
  return (
    <div className='about'>
      <Link to='/' className='resume-link about-back'>GO BACK</Link>
      <section className='about-top'>
        <div className='about-block'>
          <h2>I design & build</h2>
          <h2>digital products</h2>
         
        </div>
        <img src={victorImg} alt='Headshot of Victor Abraham.'/>
      </section>
      <section className='about-bottom'>
      <div className='about-bottom__text'> 
            <p>After being invited to an internal internship at my IT job,
               I decided to make a switch within the tech industry and took the leap of becoming 
               a full-time development student through Turing. After a challenging and rewarding 8 month course, 
               I have spent the better part of the past year working as a freelance developer and an online coding instructor. 
                 When I'm not coding, I am a fantasy football commissioner, a doting dog father, organizer of Catan game nights, an occasional gym-goer, amateur writer, and an audiobook/podcast enthusiast. </p>
          </div>
        <div className='about-bottom__contact'>
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
      </section>
    </div>
  )
}

export default About