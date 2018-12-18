import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as actions from './../actions';

import './App.scss';

import Welcome from './Welcome/Welcome';
import SearchResults from './SearchResults/SearchResults';
import ResortView from './ResortView/ResortView';

import MainFooter from './MainFooter';
import SecondaryFooter from './SecondaryFooter';
import {Navbar, NavItem} from 'react-materialize';
import {connect} from 'react-redux';
import {fetchResorts} from './../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const {dispatch} = this.props;
    const {getResortListSnapshot} = actions;
    dispatch(getResortListSnapshot())
  }
  render() {
    return (
      <div className="App">
        <div className="navbar-fixed custom-nav">
          <Navbar className="transparent" brand='POWDER PAL' right>
            <NavItem href='components.html'>WHAT IS THIS</NavItem>
            <NavItem onClick={() => console.log("Yes")}>SIGN UP</NavItem>
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

const mapStateToProps = state => {
  let data;
  const resort = state;
  if(state.isFetching) {
    data = {
      resorts: state.resorts
    };
  }
  else {
    data = {

    }
  }
  return {
    resorts: data
  }
}

export default withRouter(connect(mapStateToProps)(App));
