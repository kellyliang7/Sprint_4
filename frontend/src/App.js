import React, { Component } from 'react';
import NavBar from '../src/nav'
import Quiz from '../src/quiz'
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
        
        <Quiz />
      </Switch>

      </div>
    );
  }
}

export default withRouter(App);
