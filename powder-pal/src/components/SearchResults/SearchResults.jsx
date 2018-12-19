import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchResorts, getLiftieResortData} from './../../actions';
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
    this.props.dispatch(getLiftieResortData(this.props.data.liftieData, this.props.data.userGeo));
  }


  render() {
    return(
      <div className="search-wrapper">
        <SearchSidebar/>
        <div className="results-wrapper">
          <TopFeature/>
          {this.props.data.filteredResults.map((resort, index) =>
            <Resort key={index}
              resortData={resort}
              placePhotoURL={this.props.data.placePhotoURL}/>)} 
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let data;
  const resort = state;
  console.log(resort)
  if(!state.isFetching) {
    data = {
      resorts: state.resorts,
      placeCandidates: state.placeCandidates,
      placePhotoURL: state.placePhotoURL,
      liftieData: state.liftieData,
      userGeo: state.userGeo,
      filteredResults: state.filteredResults
    };
  } else {
      data = {
        resorts: {

        },
        liftieData: state.liftieData
      }
    }
    console.log(data)
  return {
   data
  }
}

export default connect(mapStateToProps)(SearchResults);
