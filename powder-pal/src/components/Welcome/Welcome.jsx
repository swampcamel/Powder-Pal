import React from 'react';

import './Welcome.scss'

import HeroContent from './HeroContent';


class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="welcome-wrapper">
        <HeroContent/>
      </div>
    )
  }
}

export default Welcome;
