import React, { useState } from 'react';

import { ReactComponent as NotificationIcon } from 'svg/icons/NotificationIcon.svg';

import './NotificationBell.scss';

const NotificationBell: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <div onClick={ toggleExpanded } className="NotificationBell">
      <NotificationIcon />
    </div>
  )
}

export default NotificationBell;
