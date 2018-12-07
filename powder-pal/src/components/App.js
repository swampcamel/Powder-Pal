import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, withRouter } from 'react-router-dom';

import './App.scss';

import Welcome from './Welcome/Welcome';
import SearchResults from './SearchResults/SearchResults';
import ResortView from './ResortView/ResortView';

import MainFooter from './MainFooter';
import SecondaryFooter from './SecondaryFooter';
import {Navbar, NavItem} from 'react-materialize';


class App extends Component {
  constructor(props) {
    super(props);
  }
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
        <Switch>
          <Route exact path='/' render={() => <Welcome/>} />
          <Route path='/query' render={() => <SearchResults/>} />
          <Route path ='/resort' render={() => <ResortView/>} />
        </Switch>
        <MainFooter/>
        <SecondaryFooter/>
      </div>
    );
  }
}

export default App;
