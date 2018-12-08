import React from 'react';
import './ResortView.scss';

import ResortDetailSidebar from './ResortDetailSidebar';
import TopFeature from './../SearchResults/TopFeature';


function ResortView() {
  return(
    <div className="resort-wrapper">
      <ResortDetailSidebar/>
      <div className="detail-wrapper">
        <TopFeature/>
      </div>

    </div>
  )
}

export default ResortView;
