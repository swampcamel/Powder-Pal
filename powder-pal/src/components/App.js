import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.scss';

import Welcome from './Welcome/Welcome';
import MainFooter from './MainFooter';
import SecondaryFooter from './SecondaryFooter';

import {Navbar, NavItem} from 'react-materialize';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar-fixed custom-nav">
          <Navbar className="transparent" brand='POWDER PAL' right>
            <NavItem href='components.html'>WHAT IS THIS</NavItem>
            <NavItem onClick={() => console.log('test click')}>SIGN UP</NavItem>
            <NavItem href='components.html'>LOG IN</NavItem>
          </Navbar>
        </div>
        <Welcome/>
        <MainFooter/>
        <SecondaryFooter/>
      </div>
    );
  }
}

export default App;
