import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {getUserGeoCode} from './../../actions';
import {connect} from 'react-redux';
import './HeroContent.scss';

class HeroContent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  return (
    <div className="hero-content">
      <div className="hero-content-blurb">
        <h3>You only get this chance one season a year.</h3>
        <h2>Get out there.</h2>
      </div>
      <div className="hero-content-search">
        <Link to='/query'>
        <div className="search-icon">
          Icon
        </div>
        </Link>
        <div className="search-input">
          <form onSubmit={event => {
              let query = this.input.value;
              console.log(this.input)
              event.preventDefault();
              this.props.dispatch(getUserGeoCode(query))
            }}>
            <input ref={node => {this.input = node}} placeholder="Enter a location"></input>
            </form>
        </div>
      </div>
    </div>
  )}
}

export default connect()(HeroContent);
