import React, { Component } from 'react';
import Heading from '../../components/Heading/Heading';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import './Home.scss';

class Home extends Component {
  constructor() {
    super()
    this.state = { 
    }
  }
  render() {
    return (
    <body class="home">
      <Heading />
      <ProjectsSection />
    </body>
    )
  }
}

export default Home;