import React from 'react';
import './Home.scss';

import MovieList from 'components/MovieList';
import RecomendationFilters from 'components/RecomandationFilters';

const Home: React.FC = () => {
  return (
    <main className="Home">
      <RecomendationFilters />
      <MovieList />
    </main>
  )
}

export default Home;