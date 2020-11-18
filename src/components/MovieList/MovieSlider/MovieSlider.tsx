import React, { useContext } from 'react';
import './MovieSlider.scss';

import { Swiper, Slide } from 'react-dynamic-swiper';
import 'react-dynamic-swiper/lib/styles.css'

import FavoriteButton from 'components/FavoriteButton';
import { ReactComponent as ZoomIcon } from 'svg/icons/ZoomIcon.svg';

import { MovieInfo } from 'utils/apiHandler';
import { MovieContext } from 'contexts/MovieContext';

type Props = {
  movies: MovieInfo[]
}

const MovieSlider: React.FC<Props> = ({ movies }) => {
  const { openModal } = useContext(MovieContext);

  return (
    <div className="MovieSlider">
      <Swiper
      swiperOptions={{
        speed: 500,
        breakpoints: {
          0: {
            slidesPerView: 1.25,
            slidesPerGroup: 1,
            spaceBetween: 10,
            slidesOffsetBefore: window.innerWidth / 10,
            slidesOffsetAfter: window.innerWidth / 10,
            pagination: false
          },
          320: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 45,
            slidesOffsetBefore: window.innerWidth / 5.6,
            slidesOffsetAfter: window.innerWidth / 5.6,
            pagination: false
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            slidesOffsetBefore: window.innerWidth / 2 / 2,
            slidesOffsetAfter: window.innerWidth / 2 / 2,
            pagination: false
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 3,
            spaceBetween: 30,
            slidesOffsetBefore: window.innerWidth / 4 / 2,
            slidesOffsetAfter: window.innerWidth / 4 / 2,
            pagination: false
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 4,
            pagination: false,
            slidesOffsetBefore: window.innerWidth / 5 / 2,
            slidesOffsetAfter: window.innerWidth / 5 / 2
          },
          1200: {
            slidesPerView: 5,
            slidesPerGroup: 4,
            spaceBetween: 45,
            pagination: false,
            slidesOffsetBefore: window.innerWidth / 5 / 2,
            slidesOffsetAfter: window.innerWidth / 5 / 2
          },
          1680: {
            slidesPerView: 7,
            slidesPerGroup: 6,
            spaceBetween: 45,
            pagination: { clickable: true },
            slidesOffsetBefore: window.innerWidth / 7 / 2,
            slidesOffsetAfter: window.innerWidth / 7 / 2
          },
          1920: {
            slidesPerView: 7,
            slidesPerGroup: 6,
            spaceBetween: 45,
            pagination: { clickable: true },
            slidesOffsetBefore: window.innerWidth / 7 / 2,
            slidesOffsetAfter: window.innerWidth / 7 / 2
          }
        }
      }}
      navigation
      pagination
      >
        {movies.map(movie => (
          <Slide key={movie.id}>
            <div className="MovieSlider__card" style={{ backgroundImage: `url(${movie.imageUri})` }}>
              <div onClick={ () => openModal(movie.id) } className="details-prompt">
                <ZoomIcon />
                <div className="cornered">
                  <FavoriteButton id={ movie.id } />
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieSlider;