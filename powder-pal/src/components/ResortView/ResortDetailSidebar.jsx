import React from 'react';
import './ResortDetailSidebar.scss'
import {Button} from 'react-materialize';

function ResortDetailSidebar() {
  return(
    <div className='detail-sidebar'>
      <div className='detail-flex'>
        <span>--Image--</span>
        <h4>Resort Name</h4>
        <h5>Location Line 1</h5>
        <h5>Location Line 2</h5>
        <span>*****</span>
        <span># of Reviews</span>
        <Button>Add to Favorites</Button>
      </div>
    </div>
  );
}

export default ResortDetailSidebar;
