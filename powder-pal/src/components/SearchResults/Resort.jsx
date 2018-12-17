import React from 'react';
import './Resort.scss';

function Resort(props) {
  if (!props.resorts) {
    return (<div>Loading...</div>)
  }
  else {
  return(
    <div className="resort">
      <div className="resort-col">
        <h5>{props.resorts.resortname}</h5>
        <h6>{props.resorts.resortcountry}</h6>
        <p>Distance</p>
        <span>Open Lift Status</span> <span>Closed Lift Status</span>
        <div className="star-rating">*****</div>
        <p># of Reviews</p>
      </div>
      <div className="resort-col">
        <span>Day Rate: </span> <span> $## - $## </span>
        <p>Link To Deals</p>
        <p>Conditions:</p>
        <ul>
          <li>{props.resorts.lowersnow_in} - {props.resorts.uppersnow_in} Inches Deep</li>
          <li>{props.resorts.conditions}</li>
        </ul>
        <p>Runs:</p>
        <p>{props.resorts.pctopen}% Runs Open</p>
        <ul>
          <li>Green</li>
          <li>Blue</li>
          <li>Black</li>
          <li>DblBlack</li>
        </ul>
      </div>
      <div className="resort-col">
        <div className="resort-img-wrapper">Image</div>
      </div>
    </div>
  )}
}

export default Resort;
