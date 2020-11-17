import React from 'react';
import './MovieSlider.scss';

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

const MovieSlider: React.FC = () => {
  return (
    <div className="MovieSlider">
      <Swiper
        speed={500}
        navigation
        pagination
        breakpoints={{
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
          // when window width is >= 768px
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
          }
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MovieSlider;