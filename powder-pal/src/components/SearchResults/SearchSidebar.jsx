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
              this.props.dispatch(getLiftieResortData(this.props.data.liftieData, this.props.data.userGeo))
            })}}>
        <div className='location-query'>
          <Input ref="locationInput" placeholder='Portland, OR'></Input>
          <button type="submit">change?</button>
        </div>
      </form>
      </div>
      <div className='sidebar-divider'>
      </div>
      <div className='sidebar-pad location-query'>
        <Input labelClassName='mat-input-label' className='mat-input' type='select' label="Distance" defaultValue='3'>
          <option value='1'>within 100 miles</option>
          <option value='2'>within 200 miles</option>
          <option value='3'>within 300 miles</option>
          <option value='no-limit'>no limit</option>
        </Input>
      </div>
      <div className='sidebar-divider'>
      </div>
      <div className='sidebar-pad location-query'>
        <Input labelClassName='mat-input-label' className='mat-input' type='select' label="status" defaultValue='1'>
          <option value='1'>currently open</option>
          <option value='2'>open and closed</option>
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
      resorts: state.resorts,
      placeCandidates: state.placeCandidates,
      placePhotoURL: state.placePhotoURL,
      liftieData: state.liftieData,
      userGeo: state.userGeo,
      filteredResults: state.filteredResults
    };
  } else {
      data = {
        resorts: {

        },
        liftieData: state.liftieData
      }
    }

  return {
   data
  }
}

export default connect(mapStateToProps)(SearchSidebar);
