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
    let resortAddress = props.resortData.formatted_address.split(',');
    return(
      <div className="resort">
        <div className="resort-col">
          <Link to="/resort">
            <h5>{props.resortData.name}</h5>
          </Link>
          <div className="first-col-wrapper">
            <div className="location-wrapper">
              {resortAddress.map((snippet) => <p>{snippet}</p>)}
              <p className="distance-info">{props.distance} Miles Away</p>
            </div>
            <div className="lift-ratings-wrapper">
              <div className="lift-wrapper">
                <span className='open-lifts'>{props.resortData.lifts.stats.open} Lifts Open</span> <span className='closed-lifts'>{props.resortData.lifts.stats.closed} Lifts Closed</span>
              </div>
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
          </div>
        </div>
        <div className="resort-col">
          <div className="second-col-wrapper">
            <div className="temp-snow">
              <div>
                <span className="detail-title">Temp: </span><span className="detail-data">{props.resortData.weather.temperature.max} &deg; Fahr</span>
              </div>
              <div>
                <span className="detail-title">New Snow: </span><span className="detail-data">{props.resortData.weather.snow}</span>
              </div>
            </div>
            <p className="detail-title">Conditions:</p>
            <p className="detail-data">{props.resortData.weather.conditions}</p>
            <p className="detail-title">Runs:</p>
            <p className="detail-data">{props.resortData.lifts.stats.percentage.open}% Runs Open</p>
          </div>
        </div>
        <div className="resort-col">
          <Link to="/resort">
            <div className="resort-img-wrapper">
              <img className="resort-image" src={props.resortData.photoLocalPath}/>
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
