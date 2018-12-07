import React from 'react';
import './SearchSidebar.scss'
import {Input} from 'react-materialize';

function SearchSidebar() {
  return (
    <div className='search-sidebar'>
      <div className='sidebar-pad'>
        <h5 className='sidebar-title'>Displaying results for:</h5>
        <div className='location-query'>
          <Input placeholder='Portland, OR'></Input>
          <span>change?</span>
        </div>
      </div>
      <div className='sidebar-divider'>
      </div>
      <div className='sidebar-pad location-query'>
        <Input labelClassName='mat-input-label' className='mat-input' type='select' label="Distance" defaultValue='3'>
          <option value='1'>within 60 miles</option>
          <option value='2'>within 120 miles</option>
          <option value='3'>within 180 miles</option>
          <option value='4'>no limit</option>
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
  );
}

export default SearchSidebar;
