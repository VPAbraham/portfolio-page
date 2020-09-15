import React from 'react';
import Project from '../Project/Project'
import intueatImg from '../../assets/images/intueat.png';

const ProjectsSection = () => {
  return (
    <section>
      <Project 
      name='Intueat'
      description='- Built out CMS microservice for freelance client`s art gallery, allowing low-tech employees to update site content.' 
      ghlink='https://github.com/VPAbraham/intueat' 
      deplink='http://localhost:3001/'
      previewImg={intueatImg}
      />
    </section>
  )
}

export default ProjectsSection;