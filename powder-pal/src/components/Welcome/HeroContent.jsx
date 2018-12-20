import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom'
import {getUserGeoCode} from './../../actions';
import {connect} from 'react-redux';
import './HeroContent.scss';
import {Icon} from 'react-materialize'

class HeroContent extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    toSearchView: false
  }
  switchToSearchView = () => {
    this.setState(() => ({toSearchView: true}))
  }
  render() {
    if(this.state.toSearchView === true) {
      return <Redirect to='/query'/>
    }
  return (
    <div className="hero-content">
      <div className="hero-content-blurb">
        <h3>You only get this chance one season a year.</h3>
        <hr/>
        <h2>Get out there.</h2>
      </div>
      <div className="hero-content-search">
        <Link to='/query'>
        <div className="search-icon">
          <Icon small>search</Icon>
        </div>
        </Link>
        <div className="search-input">
          <form onSubmit={event => {
              let query = this.input.value;
              event.preventDefault();
              this.props.dispatch(getUserGeoCode(query))
              setTimeout(() => {this.switchToSearchView()}, 500);
            }}>
            <input ref={node => {this.input = node}} placeholder="Enter a location"></input>
            </form>
        </div>
      </div>
    </div>
  )}
}

export default connect()(HeroContent);
