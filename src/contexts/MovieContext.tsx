import React, { Component, createContext } from 'react';

import { MovieInfo } from 'utils/apiHandler';

const favoritesKey = 'favorite';

type movieContext = {
  isModalOpen: false,
  currentMovie: MovieInfo,
  movies: MovieInfo[],
  searchFilter: string,
  availableGenres: string[],
  enabledGenres: string[],
  favorites: string[],
  isLoading: boolean,
  setSearchFilter: (value: string) => void,
  toggleGenre: (name: string) => void,
  updateMovieList: (data: MovieInfo[]) => void,
  openModal: (id: string) => void,
  closeModal: () => void,
  toggleFavorite: (id: string) => void,
  initFavorites: () => void,
  setIsLoading: (value: boolean) => void
}

const initialMovie: MovieInfo = {
  id: '',
  name: '',
  description: '',
  artist: '',
  category: '',
  imageUri: '',
  detailsPage: '',
  releaseDate: '',
  rights: ''
}

let initialState: movieContext = {
  isModalOpen: false,
  currentMovie: initialMovie,
  movies: [],
  searchFilter: '',
  availableGenres: [],
  enabledGenres: [],
  favorites: [],
  isLoading: true,
  setSearchFilter: () => { },
  toggleGenre: () => { },
  updateMovieList: () => { },
  openModal: () => { },
  closeModal: () => { },
  toggleFavorite: () => { },
  initFavorites: () => { },
  setIsLoading: () => { }
}

export const MovieContext = createContext<movieContext>({
  ...initialState
});

class MovieContextProvider extends Component {
  state = initialState;

  setSearchFilter = (value: string) => {
    this.setState({ ...this.state, searchFilter: value });
  }

  toggleGenre = (name: string) => {
    let { enabledGenres } = this.state;

    if (enabledGenres.findIndex(x => x === name) === -1) {
      enabledGenres.push(name);
    } else {
      enabledGenres.splice(enabledGenres.indexOf(name), 1);
    }

    this.setState({ ...this.state, enabledGenres });
  }

  updateMovieList = (movies: MovieInfo[]) => {
    this.setState({ ...this.state,  movies });

    const genres = movies.map(x => x.category);
    const genresSet = Array.from(new Set(genres));
    this.setState({ ...this.state, availableGenres: genresSet });
    this.setIsLoading(false);
  }

  openModal = (id: string) => {
    const movieInfo = this.state.movies.find(x => x.id === id);

    if (!movieInfo) return;

    this.setState({ ...this.state, currentMovie: movieInfo, isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ ...this.state, isModalOpen: false });
  }

  toggleFavorite = (id: string) => {
    let favorites = localStorage.getItem(favoritesKey);

    if (favorites === null) {
      favorites = '';
    }

    const favArray = favorites.split(',');

    if (favArray.find(x => x === id)) {
      const index = favArray.findIndex(x => x===id);
      favArray.splice(index, 1);
    } else {
      favArray.push(id);
    }

    const newFavorites = favArray.join(',');
    this.setState({ ...this.state, favorites: newFavorites });
    localStorage.setItem(favoritesKey, newFavorites);
  }

  initFavorites = () => {
    let favorites = localStorage.getItem(favoritesKey);

    if (favorites === null) {
      favorites = '';
      localStorage.setItem(favoritesKey, favorites);
    }

    this.setState({ ...this.state, favorites: favorites });
  }

  setIsLoading = (value: boolean) => {
    this.setState({ ...this.state, isLoading: value });
  }

  render() {
    return (
      <MovieContext.Provider value={{
        ...this.state,
        setSearchFilter: this.setSearchFilter,
        toggleGenre: this.toggleGenre,
        updateMovieList: this.updateMovieList,
        openModal: this.openModal,
        closeModal: this.closeModal,
        toggleFavorite: this.toggleFavorite,
        initFavorites: this.initFavorites,
        setIsLoading: this.setIsLoading
      }}>
        { this.props.children }
      </MovieContext.Provider>
    );
  }
}

export default MovieContextProvider;