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
      <p>Home section starts here</p>
      <ProjectsSection />
    </body>
    )
  }
}

export default Home;