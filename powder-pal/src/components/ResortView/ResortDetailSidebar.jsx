import React from 'react';

import './ResortDetailSidebar.scss'
import {Button, Icon} from 'react-materialize';

function starRatingToPercent(rating) {
  const starPercentage = `${Math.round(((rating / 5) * 100) / 10) * 10}%`;
  console.log(starPercentage);
  return starPercentage;
}

function ResortDetailSidebar(props) {
  if (props.resortInfo) {
    console.log(props.resortInfo)
    let splitLocation = props.resortInfo[0].formatted_address.split(",");
    console.log(splitLocation)
    return(
      <div className='detail-sidebar'>
      </div>
    );
  }
  else {
    return (<div>Loading...</div>)
  }
}

export default ResortDetailSidebar;
