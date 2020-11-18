import React, { Component, createContext } from 'react';
import { MovieInfo } from 'utils/apiHandler';

type movieContext = {
  movies: MovieInfo[],
  searchFilter: string,
  availableGenres: string[],
  enabledGenres: string[],
  setSearchFilter: (value: string) => void,
  getSearchFilter: () => void,
  toggleGenre: (name: string) => void,
  updateMovieList: (data: MovieInfo[]) => void
}

let initialState: movieContext = {
  movies: [],
  searchFilter: '',
  availableGenres: [],
  enabledGenres: [],
  setSearchFilter: () => { },
  getSearchFilter: () => { },
  toggleGenre: () => { },
  updateMovieList: () => { }
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


  render() {
    return (
      <MovieContext.Provider value={{
        ...this.state,
        setSearchFilter: this.setSearchFilter,
        getSearchFilter: this.getSearchFilter,
        toggleGenre: this.toggleGenre,
        updateMovieList: this.updateMovieList
      }}>
        { this.props.children }
      </MovieContext.Provider>
    );
  }
}

export default MovieContextProvider;