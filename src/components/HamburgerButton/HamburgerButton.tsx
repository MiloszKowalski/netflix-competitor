import React from 'react';

import { ReactComponent as HamburgerIcon } from 'svg/icons/HamburgerIcon.svg';

import './HamburgerButton.scss';

const HamburgerButton: React.FC = () => {
  return(
    <button className="HamburgerButton">
      <HamburgerIcon />
    </button>
  )
}

export default HamburgerButton;
