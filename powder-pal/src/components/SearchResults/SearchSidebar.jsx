import React, {Component} from 'react';
import './SearchSidebar.scss'
import {Input} from 'react-materialize';
import {connect} from 'react-redux';
import {getUserGeoCode, getLiftieResortData} from './../../actions';

class SearchSidebar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  return (
    <div className='search-sidebar'>
      <div className='sidebar-pad'>
        <h5 className='sidebar-title'>Displaying results for:</h5>
        <form onSubmit={(event) => {
            event.preventDefault();
            let locationValue = this.refs.locationInput.state.value;
            this.props.dispatch(getUserGeoCode(locationValue)).then(() => {
              this.props.dispatch(getLiftieResortData(this.props.data.liftieData, this.props.data.userGeo, this.refs.distanceInput.state.value, this.refs.openStatusInput.state.value))
            })}}>
        <div className='location-query'>
          <Input ref='locationInput' placeholder='Portland, OR'></Input>
          <button type="submit">change?</button>
        </div>
      </form>
      </div>
      <div className='sidebar-divider'>
      </div>
      <div className='sidebar-pad location-query'>
        <Input onChange={(event) => this.props.dispatch(getLiftieResortData(this.props.data.liftieData, this.props.data.userGeo, event.target.value, this.refs.openStatusInput.state.value))} ref="distanceInput" className="mat-input" labelClassName='mat-input-label' type='select' label="Distance" defaultValue='300'>
          <option value="100">within 100 miles</option>
          <option value="200">within 200 miles</option>
          <option value="300">within 300 miles</option>
          <option value='no-limit'>no limit</option>
        </Input>
      </div>
      <div className='sidebar-divider'>
      </div>
      <div className='sidebar-pad location-query'>
        <Input onChange={(event) => this.props.dispatch(getLiftieResortData(this.props.data.liftieData, this.props.data.userGeo, this.refs.distanceInput.state.value, event.target.value))} ref='openStatusInput' labelClassName='mat-input-label' className='mat-input' type='select' label="status" defaultValue='open'>
          <option value='open'>currently open</option>
          <option value='all'>open and closed</option>
        </Input>
      </div>
      <div className='sidebar-divider'>
      </div>
    </div>
  )}
}

const mapStateToProps = state => {
  let data;
  const resort = state;
  if(!state.isFetching) {
    data = {
      placePhotoURL: state.placePhotoURL,
      liftieData: state.liftieData,
      userGeo: state.userGeo,
      filteredResults: state.filteredResults
    };
  } else {
      data = {
        liftieData: state.liftieData
      }
    }

  return {
   data
  }
}

export default connect(mapStateToProps)(SearchSidebar);
