import React, { Component } from 'react';
import './App.scss';
import Heading from '../components/Heading/Heading';
import Home from '../views/Home/Home';
import Resume from '../views/Resume/Resume';

import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div>
        <Heading />
        <Home />
        {/* <Switch>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route exact path='/' >
            <Home />
          </Route>
        </Switch> */}
   
      </div>
    )
  }
}

export default App;
