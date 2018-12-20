import React, {Component} from 'react';
import './Resort.scss';
import {Link} from 'react-router-dom';


function Resort(props) {
  if (props.resortData) {
    return(
      <div className="resort">
        <div className="resort-col">
          <Link to="/resort">
            <h5>{props.resortData.name}</h5>
          </Link>
          <div className="location-wrapper">
            <h6>{props.resortData.ll[0]} {props.resortData.ll[1]}</h6>
            <span>&bull;</span>
            <p>{props.distance} Miles Away</p>
          </div>
          <span>{props.resortData.lifts.stats.open} Lifts Open</span> <span>{props.resortData.lifts.stats.closed} Lifts Closed</span>
          <div className="star-rating">*****</div>
          <p># of Reviews</p>
        </div>
        <div className="resort-col">
          <span>Day Rate: </span> <span> $## - $## </span>
          <p>Link To Deals</p>
          <p>Conditions:</p>
          <p>{props.resortData.weather.conditions}</p>
          <span>Temp: {props.resortData.weather.temperature.max}</span>
          <span>New Snow: {props.resortData.weather.snow}</span>
          <p>Runs:</p>
          <p>{props.resortData.lifts.stats.percentage.open}% Runs Open</p>
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
