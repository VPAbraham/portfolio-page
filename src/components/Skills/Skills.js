import React from 'react';
import './Skills.scss';
import { imageObject } from '../../assets/images/imageObject';


const Skills = () => {
  return (
    <section class="skills">
      <p>Skills</p>
      <div class="skills__logos">
        <img class="skills__logos--logo" src={imageObject.react} alt="React logo"/>
      </div>
  </section>    
  )
}

export default Skills;