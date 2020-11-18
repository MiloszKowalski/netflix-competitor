import React from 'react';

import MovieSlider from './MovieSlider';

import { MovieInfo } from 'utils/apiHandler';

import './MovieList.scss';

type Props = {
  movies: MovieInfo[];
}

const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="MovieList">
      <h3>Top 100</h3>
      <MovieSlider movies={ movies } />
    </div>
  )
}

export default MovieList;