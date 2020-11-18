import React, { Component, createContext } from 'react';
import { MovieInfo } from 'utils/apiHandler';

type movieContext = {
  isModalOpen: false,
  currentMovie: MovieInfo,
  movies: MovieInfo[],
  searchFilter: string,
  availableGenres: string[],
  enabledGenres: string[],
  setSearchFilter: (value: string) => void,
  getSearchFilter: () => void,
  toggleGenre: (name: string) => void,
  updateMovieList: (data: MovieInfo[]) => void,
  openModal: (id: string) => void,
  closeModal: () => void
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
  setSearchFilter: () => { },
  getSearchFilter: () => { },
  toggleGenre: () => { },
  updateMovieList: () => { },
  openModal: () => { },
  closeModal: () => { }
}

export const MovieContext = createContext<movieContext>({
  ...initialState
});

class MovieContextProvider extends Component {
  state = initialState;

  setSearchFilter = (value: string) => {
    this.setState({ ...this.state, searchFilter: value });
  }

  getSearchFilter = () => this.state.searchFilter;

  toggleGenre = (name: string) => {
    let { enabledGenres } = this.state;

    if (enabledGenres.findIndex(x => x === name) === -1) {
      enabledGenres.push(name);
    } else {
      enabledGenres.splice(enabledGenres.indexOf(name), 1);
    }

    this.setState({ ...this.state, enabledGenres});
  }

  updateMovieList = (movies: MovieInfo[]) => {
    this.setState({ ...this.state,  movies});

    const genres = movies.map(x => x.category);
    const genresSet = Array.from(new Set(genres));
    this.setState({ ...this.state, availableGenres: genresSet});
  }

  openModal = (id: string) => {
    const movieInfo = this.state.movies.find(x => x.id === id);

    if (!movieInfo) return;

    this.setState({ ...this.state, currentMovie: movieInfo, isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ ...this.state, isModalOpen: false });
  }

  render() {
    return (
      <MovieContext.Provider value={{
        ...this.state,
        setSearchFilter: this.setSearchFilter,
        getSearchFilter: this.getSearchFilter,
        toggleGenre: this.toggleGenre,
        updateMovieList: this.updateMovieList,
        openModal: this.openModal,
        closeModal: this.closeModal
      }}>
        { this.props.children }
      </MovieContext.Provider>
    );
  }
}

export default MovieContextProvider;