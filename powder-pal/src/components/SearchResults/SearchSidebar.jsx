import React from 'react';
import './SearchSidebar.scss'

function SearchSidebar() {
  return (
    <div className="search-sidebar">
      <div className="sidebar-pad">
        <h5>Displaying results for:</h5>
        <h5 className="location-query">Portland, OR</h5>
      </div>
      <div className="sidebar-divider"></div>
    </div>
  );
}

export default SearchSidebar;
