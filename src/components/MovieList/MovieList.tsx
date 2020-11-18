import React from 'react';

import MovieSlider from './MovieSlider';

import { MovieInfo } from 'utils/apiHandler';

import './MovieList.scss';

type Props = {
  icon: string,
  heading: string,
  movies: MovieInfo[]
}

const MovieList: React.FC<Props> = ({ icon, heading, movies }) => {
  return (
    <div className="MovieList">
      <h3 className={ icon }>{ heading }</h3>
      <MovieSlider movies={ movies } />
    </div>
  )
}

export default MovieList;