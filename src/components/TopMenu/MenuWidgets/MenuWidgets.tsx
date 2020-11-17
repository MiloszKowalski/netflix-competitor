import React from 'react';

import NotificationBell from 'components/NotificationBell';
import ProfileDropdown from 'components/ProfileDropdown';
import SearchBox from 'components/SearchBox';

import './MenuWidgets.scss';

const MenuWidgets: React.FC = () => {
  return (
    <ul className="MenuWidgets">
      <li className="MenuWidgets__item">
        <SearchBox />
      </li>
      <li className="MenuWidgets__item">
        <NotificationBell />
      </li>
      <li className="MenuWidgets__item">
        <ProfileDropdown />
      </li>
    </ul>
  )
}

export default MenuWidgets;