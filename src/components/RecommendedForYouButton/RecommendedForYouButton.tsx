import React from 'react';

import { ReactComponent as ArrowDownIcon } from 'svg/icons/ArrowDownIcon.svg';
import { ReactComponent as GridViewIcon } from 'svg/icons/GridViewIcon.svg';

import './RecommendedForYouButton.scss';

const RecommendedForYouButton: React.FC = () => {
  return (
    <button className="RecommendedForYouButton">
      <GridViewIcon />
      <h6>Recommended for you</h6>
      <ArrowDownIcon />
    </button>
  )
}

export default RecommendedForYouButton;
