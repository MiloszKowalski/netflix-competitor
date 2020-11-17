import React from 'react';

import ProfilePicture from 'img/profile.png';
import { ReactComponent as ArrowDownIcon } from 'svg/icons/ArrowDownIcon.svg';

import './ProfileDropdown.scss';

const ProfileDropdown: React.FC = () => {
  return (
    <div className="ProfileDropdown">
      <img src={ ProfilePicture } alt="profile" className="ProfileDropdown__image"/>
      <ArrowDownIcon />
    </div>
  )
}

export default ProfileDropdown;