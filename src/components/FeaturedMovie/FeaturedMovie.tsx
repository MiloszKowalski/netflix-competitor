import React from 'react';

import AddListButton from 'components/AddListButton';
import WatchButton from 'components/WatchButton';

import MovieHeaderImage from 'img/movie-header.png';

import './FeaturedMovie.scss';

const FeaturedMovie: React.FC = () => {
  return (
    <article className="FeaturedMovie">
      <img className="FeaturedMovie__image" src={ MovieHeaderImage } alt="Despicable Me"/>
      <p className="FeaturedMovie__description">
        He is an evil villain who wants to steal the moon.
        Fortunately for us, three girls are not going
        to let this happen!
      </p>
      <div className="FeaturedMovie__button-wrapper">
        <WatchButton />
        <AddListButton />
      </div>
    </article>
  )
}

export default FeaturedMovie;
