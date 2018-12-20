import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchResorts, getLiftieResortData, calculateDistance} from './../../actions';
import './SearchResults.scss';

import SearchSidebar from './SearchSidebar';
import TopFeature from './TopFeature';
import Resort from './Resort';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(getLiftieResortData(this.props.data.liftieData, this.props.data.userGeo, 300, "open"));
  }

  render() {
    return (
      <div className="search-wrapper">
        <SearchSidebar/>
        <div className="results-wrapper">
          <TopFeature/>
          {this.props.data.filteredResults.map((resort, index) =>{
            let value = calculateDistance(this.props.data.userGeo.lat, this.props.data.userGeo.lng, resort.ll[1], resort.ll[0], "M")
            return(<Resort key={index}
              resortData={resort}
              distance={value}
              placePhotoURL={this.props.data.placePhotoURL}/>)})}
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
          placePhotoURL: state.placePhotoURL,
          liftieData: state.liftieData,
          userGeo: state.userGeo,
          filteredResults: state.filteredResults
        };
      } else {
        data = {
          liftieData: state.liftieData
        }
      }
      return {
        data
      }
    }

    export default connect(mapStateToProps)(SearchResults);
