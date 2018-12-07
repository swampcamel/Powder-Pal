import React from 'react';
import './SearchResults.scss';

import SearchSidebar from './SearchSidebar';

function SearchResults() {
  return(
    <div className="search-wrapper">
      <SearchSidebar/>
      Search Results
    </div>
  )
};

export default SearchResults;
