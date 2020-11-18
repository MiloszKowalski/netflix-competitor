import React, { useContext } from 'react';

import Navigation from './Navigation';
import MenuWidgets from './MenuWidgets';

import { TopMenuContext } from 'contexts/TopMenuContext';
import { useScrollPosition } from 'utils/useScrollPosition';

import Logo from 'img/logo.png';

import './TopMenu.scss';

const TopMenu: React.FC = () => {
  const { isExpanded, isDocked, setIsDocked } = useContext(TopMenuContext);
  useScrollPosition(({ prevPos, currPos }) => {
    // If the position hasn't changed, return
    if(prevPos === currPos) {
      return;
    }

    // If we are on the top of the page and menu isn't expanded, dock menu
    if(currPos.y === 0 && !isExpanded) {
      setIsDocked(true);
    } else if (isDocked) {
      setIsDocked(false);
    }
  });

  return (
    <header className={
      `TopMenu
      ${isDocked ? '' : 'undocked'}
      ${isExpanded ? 'expanded' : ''}`
    }>
      <a href="/">
        <div className="TopMenu__logo">
          <img className="TopMenu__logo__img" src={Logo} alt="logo"/>
        </div>
      </a>
      <div className="TopMenu__navigation-wrapper">
        <Navigation />
        <MenuWidgets />
      </div>
    </header>
  )
}

export default TopMenu;
