import React, { useEffect, useContext } from 'react';

import FeaturedMovie from 'components/FeaturedMovie';
import MovieList from 'components/MovieList';
import RecomendationFilters from 'components/RecomandationFilters';

import { MovieContext } from 'contexts/MovieContext';
import { getMovieListing, MovieInfo } from 'utils/apiHandler';

import './Home.scss';

const Home: React.FC = () => {
  const {
    updateMovieList, initFavorites, setIsLoading,
    favorites, movies, searchFilter, enabledGenres
  } = useContext(MovieContext);

  const filteredMovies = movies.filter(x => {
    const movieIncludesName = x.name.toLowerCase().includes(searchFilter.toLowerCase());
    let movieIncludesGenre = true;
    if(enabledGenres.length) {
      movieIncludesGenre = !!enabledGenres.find(y => y === x.category);
    }

    return movieIncludesName && movieIncludesGenre;
  });

  const favoriteMovies = movies.filter(x => favorites.includes(x.id));

  useEffect(() => {
    setIsLoading(true);
    getMovieListing()
    .then((movies: MovieInfo[]) => {
      updateMovieList(movies);
      initFavorites();
    });
  }, [updateMovieList, initFavorites, setIsLoading]);

  return (
    <main className="Home">
      <RecomendationFilters />
      <FeaturedMovie />
        <MovieList heading="Top 100" icon="rocket" movies={ filteredMovies } />
        { favorites.length && <MovieList heading="Your favorites" icon="heart" movies={ favoriteMovies } />}
    </main>
  )
}

export default Home;