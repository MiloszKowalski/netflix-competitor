import React from 'react';

import { ReactComponent as PlayIcon } from 'svg/icons/PlayIcon.svg';

import './WatchButton.scss';

const WatchButton: React.FC = () => {
  return (
    <button className="WatchButton">
      <PlayIcon />
      <h4>WATCH</h4>
    </button>
  )
}

export default WatchButton;
