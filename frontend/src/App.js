import React, { Component } from 'react';
import NavBar from '../src/nav'
import { Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
      <Switch>
        <NavBar /> 
      </Switch>
        Hello
      </div>
    );
  }
}

export default withRouter(App);
