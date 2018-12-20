import React, { Component } from 'react';
import {connect} from 'react-redux';

import ResortDetailSidebar from './ResortDetailSidebar';
import TopFeature from './../SearchResults/TopFeature';

import './ResortView.scss';

class ResortView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  render(){
    return(
      <div className="resort-wrapper">
        <ResortDetailSidebar selectedResort={this.props.data.selectedResort} />
        <div className="detail-wrapper">
          <TopFeature/>
          <div className="detail-view">
            <h2>{this.props.data.selectedResort.name} Report</h2>
            <hr/>
            <div className="conditions-info">
            <h4>Conditions:</h4>
            <p className="detail-info">{this.props.data.selectedResort.weather.conditions}</p>
            <p className="detail-info">Temp: {this.props.data.selectedResort.weather.temperature.max}</p>
            <p className="detail-info">New Snow: {this.props.data.selectedResort.weather.snow}</p>
            </div>
            <div className="two-col">
              <div className="two-col-col">
                <h4>Lifts:</h4>
                <p className="detail-info">{this.props.data.selectedResort.lifts.stats.open} Lifts Open</p>
                <p className="detail-info">{this.props.data.selectedResort.lifts.stats.closed} Lifts Closed</p>
                <p className="detail-info">{this.props.data.selectedResort.lifts.stats.scheduled} Lifts Scheduled</p>
                <p className="detail-info">{this.props.data.selectedResort.lifts.stats.hold} Lifts On Hold</p>
                <p className="detail-info">{this.props.data.selectedResort.lifts.stats.percentage.open}% Lifts Open</p>
                <p className="detail-info">{this.props.data.selectedResort.lifts.stats.percentage.closed}% Lifts Closed</p>
                <p className="detail-info">{this.props.data.selectedResort.lifts.stats.percentage.scheduled}% Lifts Scheduled</p>
                <p className="detail-info">{this.props.data.selectedResort.lifts.stats.percentage.closed}% Lifts On Hold</p>
                {Object.keys(this.props.data.selectedResort.lifts.status).map((name, index) => {
                  return(
                    <p key={index}>{name} : {this.props.data.selectedResort.lifts.status[name]}</p>
                  )})}
                </div>
                <div className="two-col-col">
                  <h4>Tweets: </h4>
                  {this.props.data.selectedResort.twitter.tweets.map((tweet, index) => {
                    return(
                      <div key={index}>
                        <p>#{index}</p>
                        <p>Timestamp: {tweet.created_at}</p>
                        <p className="tweet-text">{tweet.text}</p>
                      </div>
                    )})}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    const mapStateToProps = state => {
      let data;
      const resort = state;
      data = {
        selectedResort: state.selectedResort
      };
      return {
        data
      }
    }

    export default connect(mapStateToProps)(ResortView);
