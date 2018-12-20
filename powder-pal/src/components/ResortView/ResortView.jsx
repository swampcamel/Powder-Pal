import React, { Component } from 'react';
import {connect} from 'react-redux';

import ResortDetailSidebar from './ResortDetailSidebar';
import TopFeature from './../SearchResults/TopFeature';

import './ResortView.scss';

class ResortView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  render(){
    return(
      <div className="resort-wrapper">
        <ResortDetailSidebar resortImgUrl={this.props.data.placePhotoURL} />
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
      placePhotoURL: state.placePhotoURL
    };
  } else {
    data = {
    }
  }
  return {
    data
  }
}

export default connect(mapStateToProps)(ResortView);
