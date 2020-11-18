import React, { useContext } from 'react';

import Loader from 'components/Loader';
import MovieSlider from './MovieSlider';

import { MovieContext } from 'contexts/MovieContext';
import { MovieInfo } from 'utils/apiHandler';

import './MovieList.scss';

type Props = {
  icon: string,
  heading: string,
  movies: MovieInfo[]
}

const MovieList: React.FC<Props> = ({ icon, heading, movies }) => {
  const { isLoading } = useContext(MovieContext);
  return (
    <div className="MovieList">
      <h3 className={ icon }>{ heading }</h3>
      {isLoading ? <Loader /> :
      <MovieSlider movies={ movies } />}
    </div>
  )
}

export default MovieList;
