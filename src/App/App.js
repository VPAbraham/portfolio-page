import React, { Component } from 'react';
import './App.scss';
import Heading from '../components/Heading/Heading';
import Home from '../views/Home/Home';
import Resume from '../views/Resume/Resume';
import Contact from '../views/Contact/Contact';
import About from '../views/About/About';


import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div className='app'>
        {/* <Heading /> */}
        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route exact path='/' >
            <Home />
          </Route>
        </Switch>
   
      </div>
    )
  }
}

export default App;
