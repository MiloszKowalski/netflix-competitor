import React, { useState } from 'react';
import './NotificationBell.scss';

import { ReactComponent as NotificationIcon } from 'svg/icons/NotificationIcon.svg';

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