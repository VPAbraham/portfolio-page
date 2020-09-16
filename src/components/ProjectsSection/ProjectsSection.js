import React from 'react';
import './ProjectsSection.scss';
import Project from '../Project/Project'
import intueatImg from '../../assets/images/intueat.png';
import portfolioImg from '../../assets/images/portfolio.png';
import natoursImg from '../../assets/images/natours.png';
import pokemonImg from '../../assets/images/pokemon.png';


const ProjectsSection = () => {
  return (
  
    <section className='projects'>
      <h2 className='projects__header'>PROJECTS & APPLICATIONS</h2>
      <div className='projects__section'>
        <Project 
          name='Great Outdoors Nature Tours'
          description='- Built out CMS microservice for freelance client`s art gallery, allowing low-tech employees to update site content.' 
          ghlink='https://github.com/VPAbraham/great-outdoors' 
          deplink='http://localhost:3001/'
          previewImg={natoursImg}
        />
        <Project 
          name='CRWN Clothing Shop'
          description='Clothes ecommerce shop' 
          ghlink='https://github.com/VPAbraham/intueat' 
          deplink='http://localhost:3001/'
          previewImg={intueatImg}
        />
        <Project 
          name='Pokémon TCG DB'
          description='- Built out CMS microservice for freelance client`s art gallery, allowing low-tech employees to update site content.' 
          ghlink='https://github.com/VPAbraham/intueat' 
          deplink='https://pokemon-tcg-db.herokuapp.com/'
          previewImg={pokemonImg}
        />
        <Project 
          name='Intueat'
          description='- Built out CMS microservice for freelance client`s art gallery, allowing low-tech employees to update site content.' 
          ghlink='https://github.com/VPAbraham/intueat' 
          deplink='http://localhost:3001/'
          previewImg={intueatImg}
        />
        <Project 
          name='Intueat'
          description='- Built out CMS microservice for freelance client`s art gallery, allowing low-tech employees to update site content.' 
          ghlink='https://github.com/VPAbraham/intueat' 
          deplink='http://localhost:3001/'
          previewImg={intueatImg}
        />
        <Project 
          name='Portfolio'
          description='This is the site you are visiting right now!' 
          ghlink='https://github.com/VPAbraham/portfolio-page' 
          deplink='vpabraham.com'
          previewImg={portfolioImg}
        />
      </div>
    </section>
  )
}

export default ProjectsSection;