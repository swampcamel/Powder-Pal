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
  }

  calculateDistance(lat1, lon1, lat2, lon2, unit) {
    //default coords for portland
    // const lat1 = 45.520780;
    // const lon1 = -122.677398;
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit=="K") { dist = dist * 1.609344 }
      if (unit=="N") { dist = dist * 0.8684 }
      return Math.round(dist);
    }
  }
  render() {
    return(
      <div className="search-wrapper">
        <SearchSidebar/>
        <div className="results-wrapper">
          <TopFeature/>
          {this.props.data.liftieData.map((resort, index) => {
            let distance = this.calculateDistance(this.props.data.userGeo.lat, this.props.data.userGeo.lng, resort.ll[1], resort.ll[0], "M");
            if( distance < 1000) {

              return (<Resort key={index} id={index} liftieInfo={resort} distance={distance} resorts={this.props.data.resorts} placeCandidates={this.props.data.placeCandidates} placePhotoURL={this.props.data.placePhotoURL}/>);
              }
          })}

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
      userGeo: state.userGeo
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
