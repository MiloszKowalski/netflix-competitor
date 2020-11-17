import React from 'react';

import { ReactComponent as FacebookIcon } from 'svg/icons/socials/FacebookIcon.svg';
import { ReactComponent as InstagramIcon } from 'svg/icons/socials/InstagramIcon.svg';
import { ReactComponent as LonflixIcon } from 'svg/icons/LonflixIcon.svg';
import { ReactComponent as TwitterIcon } from 'svg/icons/socials/TwitterIcon.svg';
import { ReactComponent as YouTubeIcon } from 'svg/icons/socials/YouTubeIcon.svg';

import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <nav className="Footer__navigation">
        <div className="Footer__navigation__logo"><LonflixIcon /></div>
        <ul>
          <li><a href="/">Sound and subtitles</a></li>
          <li><a href="/">Media center</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Contact with us</a></li>
        </ul>
        <ul>
          <li><a href="/">Audiodescription</a></li>
          <li><a href="/">Investor relations</a></li>
          <li><a href="/">Legal information</a></li>
        </ul>
        <ul>
          <li><a href="/">Help center</a></li>
          <li><a href="/">Work</a></li>
          <li><a href="/">Cookie settings</a></li>
        </ul>
        <ul>
          <li><a href="/">Gift cards</a></li>
          <li><a href="/">Terms of use</a></li>
          <li><a href="/">Information about company</a></li>
        </ul>
      </nav>
      <div className="Footer__social-media">
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><FacebookIcon /></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><InstagramIcon /></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><TwitterIcon /></a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noreferrer"><YouTubeIcon /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;