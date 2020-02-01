import React, { Component } from 'react';
import Heading from '../../components/Heading/Heading';
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
    </body>
    )
  }
}

export default Home;