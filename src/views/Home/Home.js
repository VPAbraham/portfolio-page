import React, { Component } from 'react';
import Heading from '../../components/Heading/Heading';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import './Home.scss';

const Home = () => {

    return (
    <body class="home">
      <Heading />
      <ProjectsSection />
      <TestimonialsSection />
    </body>
    )

}

export default Home;