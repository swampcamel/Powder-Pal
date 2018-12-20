import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchResorts} from './../../actions';

import ResortDetailSidebar from './ResortDetailSidebar';
import TopFeature from './../SearchResults/TopFeature';

import './ResortView.scss';

class ResortView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.dispatch(fetchResorts());
  }

  render(){
    return(
      <div className="resort-wrapper">
        <ResortDetailSidebar resortImgUrl={this.props.data.placePhotoURL} resortInfo={this.props.data.placeCandidates}/>
        <div className="detail-wrapper">
          <TopFeature/>
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
      resorts: state.resorts,
      placeCandidates: state.placeCandidates,
      placePhotoURL: state.placePhotoURL
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

export default connect(mapStateToProps)(ResortView);
