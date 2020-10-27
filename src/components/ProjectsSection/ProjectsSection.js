import React from 'react';
import './ProjectsSection.scss';
import Project from '../Project/Project';
import MultiProject from '../MultiProject/MultiProject';
import intueatImg from '../../assets/images/intueat.png';
import portfolioImg from '../../assets/images/portfolio.png';
import natoursImg from '../../assets/images/natours.png';
import pokemonImg from '../../assets/images/pokemon.png';
import paletteImg from '../../assets/images/palette.png';
import dimeImg from '../../assets/images/dimebags.png';



const ProjectsSection = () => {
  return (
  
    <section className='projects'>
      <h2 className='projects__header'>PROJECTS & APPLICATIONS</h2>
      <div className='projects__section'>
        <Project 
          name='Pokémon TCG DB'
          description='The Pokemon Database utilizes the Pokemon Trading Card Game API to display and allows users to filter through Pokemon cards based on a set of criteria.' 
          ghlink='https://github.com/VPAbraham/pokemon-database' 
          deplink='https://pokemon-tcg-db.herokuapp.com/'
          previewImg={pokemonImg}
        />
        <Project 
          name='Dimebags Cannabis Delivery Partner Portal'
          description='Portal site to enter potential partners into the Dimebags partner database.' 
          ghlink='https://github.com/VPAbraham/intueat' 
          deplink='https://dimebags-delivery.herokuapp.com/'
          previewImg={dimeImg}
        />
        <MultiProject
          name='Palette Picker'
          description='Palette Picker is a React App allows users to view color palettes, name and save them in a PostgreSQL database.'
          felink='https://palette-pick-fe.herokuapp.com/'
          apilink='https://palette-pick-be.herokuapp.com/'
          ghlink1='https://github.com/VPAbraham/palette-picker-FE'
          ghlink2='https://github.com/VPAbraham/palette-picker-BE'
          previewImg={paletteImg}
        />
        <Project 
          name='Portfolio'
          description='This is the site you are visiting right now!'
          ghlink='https://github.com/VPAbraham/portfolio-page'
          deplink='http://vpabraham.com'
          previewImg={portfolioImg}
        />
        <Project 
          name='Great Outdoors Nature Tours'
          description='Nature Tours sample page designed and built from scratch to client specification.' 
          ghlink='https://github.com/VPAbraham/great-outdoors' 
          deplink='http://localhost:3001/'
          previewImg={natoursImg}
        />
        <Project 
          name='Intueat'
          description='Front page for a web application built in react to rate and hire in-home chefs. Built for UpWork client.' 
          ghlink='https://github.com/VPAbraham/intueat' 
          deplink='http://localhost:3001/'
          previewImg={intueatImg}
        />

      </div>
    </section>
  )
}

export default ProjectsSection;