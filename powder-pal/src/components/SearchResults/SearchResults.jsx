import React from 'react';
import './SearchResults.scss';

import SearchSidebar from './SearchSidebar';
import TopFeature from './TopFeature';
import Resort from './Resort';

function SearchResults() {
  return(
    <div className="search-wrapper">
      <SearchSidebar/>
      <div className="results-wrapper">
        <TopFeature/>
        <Resort/>
        <Resort/>
        <Resort/>
      </div>
    </div>
  )
};

export default SearchResults;
