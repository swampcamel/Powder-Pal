import React from 'react';
import './Resort.scss';
import {Link} from 'react-router-dom';

function distance(lat2, lon2, unit) {
  //default coords for portland
  const lat1 = 45.520780;
  const lon1 = -122.677398;
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
    return dist;
  }
}

function Resort(props) {

  if (props.resorts && props.placeCandidates) {
    let value = Math.floor(distance(props.placeCandidates[0].geometry.location.lat, props.placeCandidates[0].geometry.location.lng, "M"));
    return(
      <div className="resort">
        <div className="resort-col">
          <Link to="/resort">
            <h5>{props.resorts.resortname}</h5>
          </Link>
          <div className="location-wrapper">
            <h6>{props.resorts.resortcountry}</h6>
            <span>&bull;</span>
            <p>{value} Miles Away</p>
          </div>
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
          <Link to="/resort">
            <div className="resort-img-wrapper">
              <img src={props.placePhotoURL}/>
            </div>
          </Link>
        </div>
      </div>
    )}
    else {
      return (<div>Loading...</div>)
    }
  }
  export default Resort;
