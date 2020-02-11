import React, { Component } from 'react';
import Heading from '../../components/Heading/Heading';
import Skills from '../../components/Skills/Skills';
import Project from '../../components/Project/Project';
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
      <Heading/>
      <Skills />
      <Project />
    </body>
    )
  }
}

export default Home;