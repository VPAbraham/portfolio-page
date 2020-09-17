import React from 'react';
import './Resume.scss';
import { Link } from 'react-router-dom';
import resumeImg from '../../assets/images/resume.jpg';

const Resume = () => {
  return (
    <div className='resume'>
      <Link to='/' className='resume-link'> GO BACK</Link>
      <h1>Resume</h1>
      <img src={resumeImg} />
    </div>
  )
}

export default Resume;