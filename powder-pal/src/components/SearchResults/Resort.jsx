import React, {Component} from 'react';
import './Resort.scss';
import {Link} from 'react-router-dom';
import {getLiftieResortData} from './../../actions';
import {connect} from 'react-redux';



// let resortUI;
// getLiftieResortData(resort.id).then(resortData => {
//   resortUI = resortData;

class Resort extends Component {
  constructor(props) {
    super(props);
    this.liftieResortInfo = null;
  }
  componentWillMount(){
    // const {dispatch} = this.props;
    // dispatch(getLiftieResortData(this.props.liftieInfo.id));
  }
  componentDidMount(){
  }
  render() {
  if (this.props.resorts && this.props.placeCandidates && this.props.liftieInfo) {
    return(
      <div className="resort">
        <div className="resort-col">
          <Link to="/resort">
            <h5>{this.props.liftieInfo.name}</h5>
          </Link>
          <div className="location-wrapper">
            <h6></h6>
            <span>&bull;</span>
            <p>{this.props.distance} Miles Away</p>
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
            <li>{this.props.resorts.lowersnow_in} - {this.props.resorts.uppersnow_in} Inches Deep</li>
            <li>{this.props.resorts.conditions}</li>
          </ul>
          <p>Runs:</p>
          <p>{this.props.resorts.pctopen}% Runs Open</p>
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
              <img src={this.props.placePhotoURL}/>
            </div>
          </Link>
        </div>
      </div>
    )}
    else {
      return (<div>Loading...</div>)
    }}
  }

  // const mapStateToProps = state => {
  //   let data;
  //   const resortDataYo = state;
  //   if(!state.isFetching) {
  //     data = {
  //       filteredList: state.filteredResults
  //     };
  //   }
  //   else {
  //     data = {
  //
  //     }
  //   }
  //   return {
  //     resortData: data
  //   }
  // }

  export default connect()(Resort);
