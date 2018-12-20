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
        <div className='detail-flex'>
          <span><img src={props.resortImgUrl}></img></span>
          <h4>{props.resortInfo[0].name}</h4>
          <h5>{splitLocation[0]}</h5>
          <h5>{splitLocation[1]}</h5>
          <div className="star-rating-outer">
            <Icon tiny>star_border</Icon><Icon tiny>star_border</Icon><Icon tiny>star_border</Icon><Icon tiny>star_border</Icon><Icon tiny>star_border</Icon>
            <div className="star-rating-inner" style={{width:  starRatingToPercent(props.resortInfo[0].rating)}}>
              <Icon tiny>star</Icon><Icon tiny>star</Icon><Icon tiny>star</Icon><Icon tiny>star</Icon><Icon tiny>star</Icon>
            </div>
          </div>
          <span># of Reviews</span>
          <Button>Add to Favorites</Button>
        </div>
      </div>
    );
  }
  else {
    return (<div>Loading...</div>)
  }
}

export default ResortDetailSidebar;
