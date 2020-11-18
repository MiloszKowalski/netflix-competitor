import React, { useState, useEffect, useContext } from 'react';

import { MovieContext } from 'contexts/MovieContext';

import { ReactComponent as HeartIcon } from 'svg/icons/HeartIcon.svg';

import './FavoriteButton.scss';

type Props = {
  id: string
}

const FavoriteButton: React.FC<Props> = ({ id }) => {
  const { favorites, toggleFavorite } = useContext(MovieContext);
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavoriteClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    toggleFavorite(id);
  }

  useEffect(() => {
    setIsFavorite(favorites.includes(id));
  }, [setIsFavorite, favorites, id]);


  return (
    <button className={`FavoriteButton ${isFavorite ? 'favorite' : ''}`}
      onClick={ (e) => handleFavoriteClick(e) }>
      <HeartIcon />
    </button>
  )
}

export default FavoriteButton;
