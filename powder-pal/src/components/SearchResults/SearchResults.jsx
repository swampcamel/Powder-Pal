import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchResorts} from './../../actions';

import './SearchResults.scss';

import SearchSidebar from './SearchSidebar';
import TopFeature from './TopFeature';
import Resort from './Resort';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchResorts());
  }
  render() {
    console.log(this.props)
    return(
      <div className="search-wrapper">
        <SearchSidebar/>
        <div className="results-wrapper">
          <TopFeature/>
          <Resort resorts={this.props.data.resorts}/>
          <Resort resorts={this.props.data.resorts}/>
          <Resort resorts={this.props.data.resorts}/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  let data;
  const resort = state;
  if(!state.isFetching) {
    data = {
      resorts: state.resorts
    };
  } else {
      data = {
        resorts: {
          
        }
      }
    }
  return {
   data
  }
}

export default connect(mapStateToProps)(SearchResults);
