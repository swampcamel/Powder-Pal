import React from 'react';
import './Resort.scss';

function Resort() {
  return(
    <div className="resort">
      <div className="resort-col">
        <h5>Resort Name</h5>
        <h6>Location</h6>
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
          <li>Condition</li>
          <li>Condition</li>
          <li>Condition</li>
        </ul>
        <p>Runs:</p>
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
  )
}

export default Resort;
