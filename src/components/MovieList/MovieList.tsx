import React from 'react';

import MovieSlider from './MovieSlider';

import './MovieList.scss';

const MovieList: React.FC = () => {
  return (
    <div className="MovieList">
      <h3>Top 100</h3>
      <MovieSlider />
    </div>
  )
}

export default MovieList;