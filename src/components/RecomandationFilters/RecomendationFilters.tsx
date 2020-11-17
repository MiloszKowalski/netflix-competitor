import React, { useContext } from 'react';

import HamburgerButton from 'components/HamburgerButton';
import MultiSelectDropdown from 'components/MultiSelectDropdown';
import RecommendedForYouButton from 'components/RecommendedForYouButton';

import './RecomendationFilters.scss';
import { MovieContext } from 'contexts/MovieContext';

const RecomendationFilters: React.FC = () => {
  const { availableGenres } = useContext(MovieContext);

  return (
    <div className="RecomendationFilters">
      <div>
        <h2>Movies</h2>
        <MultiSelectDropdown title="Film genre" options={availableGenres} />
      </div>
      <div>
        <HamburgerButton />
        <RecommendedForYouButton />
      </div>
    </div>
  )
}

export default RecomendationFilters;