import React, { Component, createContext } from 'react';

type Movie = {
  title: string
}

type movieContext = {
  movies: Movie[],
  searchFilter: string,
  availableGenres: string[],
  enabledGenres: string[],
  setSearchFilter: (value: string) => void,
  getSearchFilter: () => void,
  toggleGenre: (name: string) => void
}

const initialState = {
  movies: [{title:''}],
  searchFilter: '',
  availableGenres: ['Action', 'Adventure', 'Animation', 'Biography',
    'Crime', 'Comedy', 'Documentary', 'Drama'],
  enabledGenres: ['']
}

export const MovieContext = createContext<movieContext>({
  ...initialState,
  setSearchFilter: () => { },
  getSearchFilter: () => { },
  toggleGenre: () => {}
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


  render() {
    return (
      <MovieContext.Provider value={{
        ...this.state,
        setSearchFilter: this.setSearchFilter,
        getSearchFilter: this.getSearchFilter,
        toggleGenre: this.toggleGenre
      }}>
        { this.props.children }
      </MovieContext.Provider>
    );
  }
}

export default MovieContextProvider;