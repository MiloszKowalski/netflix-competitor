import React, { Component, createContext } from 'react';

import { MovieInfo } from 'utils/apiHandler';

const favoritesKey = 'favorite';

type movieContext = {
  availableGenres: string[],
  currentMovie: MovieInfo,
  enabledGenres: string[],
  favorites: string[],
  isLoading: boolean,
  isModalOpen: false,
  movies: MovieInfo[],
  searchFilter: string,
  closeModal: () => void,
  initFavorites: () => void,
  openModal: (id: string) => void,
  setIsLoading: (value: boolean) => void
  setSearchFilter: (value: string) => void,
  toggleFavorite: (id: string) => void,
  toggleGenre: (name: string) => void,
  updateMovieList: (data: MovieInfo[]) => void,
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
  availableGenres: [],
  currentMovie: initialMovie,
  enabledGenres: [],
  favorites: [],
  isLoading: true,
  isModalOpen: false,
  movies: [],
  searchFilter: '',
  closeModal: () => { },
  openModal: () => { },
  initFavorites: () => { },
  setIsLoading: () => { },
  setSearchFilter: () => { },
  toggleFavorite: () => { },
  toggleGenre: () => { },
  updateMovieList: () => { }
}

export const MovieContext = createContext<movieContext>({
  ...initialState
});

class MovieContextProvider extends Component {
  state = initialState;

  closeModal = () => {
    this.setState({ ...this.state, isModalOpen: false });
  }

  initFavorites = () => {
    let favorites = localStorage.getItem(favoritesKey);

    if (favorites === null) {
      favorites = '';
      localStorage.setItem(favoritesKey, favorites);
    }

    this.setState({ ...this.state, favorites: favorites });
  }

  openModal = (id: string) => {
    const movieInfo = this.state.movies.find(x => x.id === id);

    if (!movieInfo) {
      return;
    }

    this.setState({ ...this.state, currentMovie: movieInfo, isModalOpen: true });
  }

  setIsLoading = (value: boolean) => {
    this.setState({ ...this.state, isLoading: value });
  }

  setSearchFilter = (value: string) => {
    this.setState({ ...this.state, searchFilter: value });
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

  render() {
    return (
      <MovieContext.Provider value={{
        ...this.state,
        closeModal: this.closeModal,
        initFavorites: this.initFavorites,
        openModal: this.openModal,
        setIsLoading: this.setIsLoading,
        setSearchFilter: this.setSearchFilter,
        toggleFavorite: this.toggleFavorite,
        toggleGenre: this.toggleGenre,
        updateMovieList: this.updateMovieList
      }}>
        { this.props.children }
      </MovieContext.Provider>
    );
  }
}

export default MovieContextProvider;
