import React, { useContext } from 'react';

import { TopMenuContext } from 'contexts/TopMenuContext';
import MenuIcon from '../MenuIcon/MenuIcon';
import './Navigation.scss';

const Navigation: React.FC = () => {
  const { isExpanded, setIsExpanded, setIsDocked } = useContext(TopMenuContext);

  function handleClick(): void {
    // Close the menu after clicking background shadow and navigating
    if(isExpanded && window.innerWidth <= 1024) setIsExpanded(false);

    setTimeout(() => {
      if(window.location.pathname !== '/') return;

      if(window.scrollY === 0) {
        setIsDocked(true);
      }
    });
  }

  return (
    <nav className="TopMenu__navigation">
      <div className="nav-shadow" onClick={ handleClick }></div>
      <ul className="TopMenu__navigation__list">
        <li className="TopMenu__navigation__list__item" onClick={ handleClick }>
          <a href="/">Home</a>
        </li>
        <li className="TopMenu__navigation__list__item" onClick={ handleClick }>
          <a href="/">Movies</a>
        </li>
        <li className="TopMenu__navigation__list__item" onClick={ handleClick }>
          <a href="/">Series</a>
        </li>
        <li className="TopMenu__navigation__list__item" onClick={ handleClick }>
          <a href="/">My list</a>
        </li>
      </ul>
      <MenuIcon />
    </nav>
  );
}

export default Navigation;