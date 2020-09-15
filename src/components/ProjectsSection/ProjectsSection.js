import React from 'react';
import './ProjectsSection.scss';
import Project from '../Project/Project'
import intueatImg from '../../assets/images/intueat.png';

const ProjectsSection = () => {
  return (
  
    <section className='projects'>
      <h2 className='projects__header'>PROJECTS & APPLICATIONS</h2>
      <div className='projects__section'>
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
      </div>
    </section>
  )
}

export default ProjectsSection;