import React from 'react';
import './Heading.scss';
import logo from '../../assets/images/logo.png'
import { imageObject } from '../../assets/images/imageObject';

const Heading = () => {
  return (
    <header class="header">
      <div class="header__nav">
        <div class="header__nav__left">
        <h3>+_+</h3>
        </div>
        <div class="header__nav__right">
          <a href="#" class="page-link">About</a>
          <a href="#" class="page-link">Contact</a>
        </div>
      </div>
      <div class="header__text-box">
          <h1 class="heading-primary">
              <span class="heading-primary--main">Victor Abraham</span>
              <span class="heading-primary--sub">Frontend Engineer</span>
              <span class="heading-primary--sub">& UI Developer</span>
          </h1>
      </div>
      <div class="header__button-box">
            <a href="#" class="btn btn--work btn--animated">Proceed with caution</a>
            <p>↓</p>   
          </div>
    </header>
  )
}

export default Heading;