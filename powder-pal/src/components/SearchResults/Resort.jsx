import React, {Component} from 'react';
import './Resort.scss';
import {Link} from 'react-router-dom';
import {Icon} from 'react-materialize';

function starRatingToPercent(rating) {
  const starPercentage = `${Math.round(((rating / 5) * 100) / 10) * 10}%`;
  return starPercentage;
}

function Resort(props) {
  if (props.resortData) {
    return(
      <div className="resort">
        <div className="resort-col">
          <Link to="/resort">
            <h5>{props.resortData.name}</h5>
          </Link>
          <div className="location-wrapper">
            <p>{props.distance} Miles Away</p>
          </div>
          <span>{props.resortData.lifts.stats.open} Lifts Open</span> <span>{props.resortData.lifts.stats.closed} Lifts Closed</span>
          <div className="star-rating-outer">
            <Icon tiny>star_border</Icon>
            <Icon tiny>star_border</Icon>
            <Icon tiny>star_border</Icon>
            <Icon tiny>star_border</Icon>
            <Icon tiny>star_border</Icon>
            <div className="star-rating-inner" style={{width: starRatingToPercent(props.resortData.rating)}}>
              <Icon tiny>star</Icon>
              <Icon tiny>star</Icon>
              <Icon tiny>star</Icon>
              <Icon tiny>star</Icon>
              <Icon tiny>star</Icon>
            </div>
          </div>
        </div>
        <div className="resort-col">
          <p>Conditions:</p>
          <p>{props.resortData.weather.conditions}</p>
          <span>Temp: {props.resortData.weather.temperature.max}</span>
          <span>New Snow: {props.resortData.weather.snow}</span>
          <p>Runs:</p>
          <p>{props.resortData.lifts.stats.percentage.open}% Runs Open</p>
        </div>
        <div className="resort-col">
          <Link to="/resort">
            <div className="resort-img-wrapper">
              <img width="100%" src={props.resortData.photoLocalPath}/>
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
