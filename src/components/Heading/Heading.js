import React from 'react';
import './Heading.scss';
import logo from '../../assets/images/logo.png'

const Heading = () => {
  return (
    <header class="header">
      <div class="header__nav">
        <div class="header__nav__left">
          <p>Work</p>
        </div>
        <div class="header__nav__right">
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <div class="header__text-box">
          <h1 class="heading-primary">
              <span class="heading-primary--main">Victor Abraham</span>
              <span class="heading-primary--sub">Frontend Developer</span>
          </h1>    
      </div>    
    </header>
  )
}

export default Heading;