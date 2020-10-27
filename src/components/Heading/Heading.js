import React from 'react';
import './Heading.scss';
import { imageObject } from '../../assets/images/imageObject';
import { Link } from 'react-router-dom';

const Heading = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <div className="header__nav__left">
          <Link className='home_button' to='/'>
            <h3>+_+</h3>
          </Link>  
        {/* <img src={imageObject.logo} /> */}
        </div>
        <div className="header__nav__right">
          <Link to="/about" className="page-link">
            About / Contact
          </Link>
          {/* <Link to="/contact" className="page-link">
            Contact
          </Link> */}
          <Link to="/resume" className="page-link">
            Resume
          </Link>
        </div>
      </div>

      
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">
            Victor Abraham
          </span>
          <span className="heading-primary--sub">
            -
          </span>
          <span className="heading-primary--sub">
            Web Developer &
          </span>
          <span className="heading-primary--sub">
            Software Engineer
          </span>
        </h1>
      </div>
      <div className="header__button-box">
        <a href="#" className="btn btn--work btn--animated">↓ View My Work ↓</a>
      </div>
    </header>
    
  )
}

export default Heading;