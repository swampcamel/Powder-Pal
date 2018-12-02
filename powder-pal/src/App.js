import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Welcome from './Welcome'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome/>
      </div>
    );
  }
}

export default App;
