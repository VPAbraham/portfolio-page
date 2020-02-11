import React from 'react';
import './Heading.scss';
import logo from '../../assets/images/logo.png'
import { imageObject } from '../../assets/images/imageObject';

const Heading = () => {
  return (
    <header class="header">
      <div class="header__nav">
        <div class="header__nav__left">
        <a href="#" class="page-link">Work</a>
        </div>
        <div class="header__nav__right">
          <a href="#" class="page-link">About</a>
          <a href="#" class="page-link">Contact</a>
        </div>
      </div>
      <div class="header__text-box">
          <h1 class="heading-primary">
              <span class="heading-primary--main">Victor Abraham</span>
              <span class="heading-primary--sub">Frontend Developer</span>
          </h1>
          <a href="#" class="btn btn--work btn--animated">View my work</a>    
      </div>
      <div class="header__skills-box">
        <p>Skills</p>
        <div class="skills-logos-box">
          <img class="skill-logo" src={imageObject.react} alt="React logo"/>
        </div>
      </div>    
    </header>
  )
}

export default Heading;