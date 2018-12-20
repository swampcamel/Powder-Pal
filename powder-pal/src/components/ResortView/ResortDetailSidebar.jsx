import React from 'react';

import './ResortDetailSidebar.scss'
import {Button, Icon} from 'react-materialize';

function starRatingToPercent(rating) {
  const starPercentage = `${Math.round(((rating / 5) * 100) / 10) * 10}%`;
  console.log(starPercentage);
  return starPercentage;
}

function ResortDetailSidebar(props) {
  let resortAddress = props.selectedResort.formatted_address.split(',');
    return(
      <div className='detail-sidebar'>
        <div className='detail-flex'>
        <img className='resort-photo' src={props.selectedResort.photoLocalPath}/>
        <h4>{props.selectedResort.name}</h4>
        <div className='address-wrapper'>
          {resortAddress.map((snippet, index) => <h5 key={index}>{snippet}</h5>)}
        </div>
          <div className="star-rating-outer">
            <Icon tiny>star_border</Icon>
            <Icon tiny>star_border</Icon>
            <Icon tiny>star_border</Icon>
            <Icon tiny>star_border</Icon>
            <Icon tiny>star_border</Icon>
            <div className="star-rating-inner" style={{width: starRatingToPercent(props.selectedResort.rating)}}>
              <Icon tiny>star</Icon>
              <Icon tiny>star</Icon>
              <Icon tiny>star</Icon>
              <Icon tiny>star</Icon>
              <Icon tiny>star</Icon>
            </div>
          </div>
        <Button>Add to Favorites</Button>
      </div>
      </div>
    );
}

export default ResortDetailSidebar;
