import React, { useContext } from 'react';
import { TopMenuContext } from 'contexts/TopMenuContext';
import './MenuIcon.scss';

const MenuIcon: React.FC = () => {
  const { isExpanded, setIsExpanded, setIsDocked } = useContext(TopMenuContext);

  function handleClick(): void {
    setIsExpanded(!isExpanded);

    // Docking should appear only on the main page
    if(window.location.pathname !== '/') return;

    // If on the top of the page, dock the menu after closing it
    if(isExpanded && window.scrollY === 0) {
      setTimeout(() => setIsDocked(true), 0);
    } else {
      setTimeout(() => setIsDocked(false), 0);
    }
  }

  return (
  <div className={`MenuIcon${isExpanded ? '--open' : ''}`}
    onClick={ handleClick } id="expand-icon">
      <div className="MenuIcon__line"></div>
      <div className="MenuIcon__line"></div>
      <div className="MenuIcon__line"></div>
  </div>
  );
}

export default MenuIcon;