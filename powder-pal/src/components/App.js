import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.scss';

import Welcome from './Welcome/Welcome';
import MainFooter from './MainFooter';
import SecondaryFooter from './SecondaryFooter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome/>
        <MainFooter/>
        <SecondaryFooter/>
      </div>
    );
  }
}

export default App;
