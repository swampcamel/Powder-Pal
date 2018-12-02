import React from 'react';

import './HeroContent.scss';

function HeroContent() {
  return (
    <div className="hero-content">
      <div className="hero-content-blurb">
        <h3>You only get this chance one season a year.</h3>
        <h2>Get out there.</h2>
      </div>
      <div className="hero-content-search"><div className="search-icon">Icon</div><div className="search-input"><input placeholder="Enter a location"></input></div></div>
    </div>
  )
}

export default HeroContent;
