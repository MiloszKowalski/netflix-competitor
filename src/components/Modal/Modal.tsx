import React, { useEffect, useRef, useContext, useCallback } from 'react';

import FavoriteButton from 'components/FavoriteButton';

import { MovieContext } from 'contexts/MovieContext';

import { ReactComponent as CloseIcon } from 'svg/icons/CloseIcon.svg';

import './Modal.scss';

const Modal: React.FC = () => {
  const { isModalOpen, currentMovie, closeModal } = useContext(MovieContext);
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(isModalOpen) {
      // Prevent glitchy jumping appearance when hiding the scrollbar
      document.body.style.marginRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      // Wait for the transition to finish
      setTimeout(() => {
        modal.current?.scrollTo(0,0);
        document.body.style.overflow = 'unset';
        document.body.style.marginRight = '0';
      }, 250);
    }
  }, [isModalOpen]);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    }, [closeModal, isModalOpen]);

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyPress(e));
    return () => {
      window.removeEventListener('keydown', (e) => handleKeyPress(e));
    }
  }, [handleKeyPress]);

  return (
    <div onClick={ closeModal } className={ `modal-wrapper ${isModalOpen ? 'visible' : ''}` }>
      <article onClick={ (e) => e.stopPropagation() } className="Modal">
        <header className="Modal__header">
          <div>
            <img className="Modal__thumbnail" src={ currentMovie.imageUri } alt=""/>
          </div>
          <div>
            <h4>{ currentMovie.name }</h4>
            <h5>
              <span>{ currentMovie.artist }</span>
              <span>{ currentMovie.category }</span>
              <span>{ currentMovie.releaseDate }</span>
              <span>
                <a href={ currentMovie.detailsPage }
                  target="_blank" rel="noreferrer">More info</a>
              </span>
              <span><FavoriteButton id={ currentMovie.id } /></span>
            </h5>
          </div>
          <div className="Modal__close-icon" onClick={ () => closeModal() }>
            <CloseIcon />
          </div>
        </header>
        <section ref={ modal } className="Modal__description">
          <p>{ currentMovie.description }</p>
        </section>
        <footer>{ currentMovie.rights }</footer>
      </article>
    </div>
  );
}

export default Modal;
