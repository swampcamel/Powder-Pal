import React from 'react';

import ResortDetailSidebar from './ResortDetailSidebar';
import TopFeature from './../SearchResults/TopFeature';



import './ResortView.scss';

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
