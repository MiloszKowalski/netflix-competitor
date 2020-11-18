import React, { useState, useRef, useContext } from 'react';

import { MovieContext } from 'contexts/MovieContext';

import { ReactComponent as SearchIcon } from 'svg/icons/SearchIcon.svg';

import './SearchBox.scss';

const SearchBox: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  let { searchFilter, setSearchFilter } = useContext(MovieContext);

  function expandSearch() {
    if (!inputRef.current) {
      return;
    }
    setExpanded(true);
    inputRef.current.focus();
  }

  function hideSearch() {
    if (!inputRef.current) {
      return;
    }
    if (!inputRef.current.value.length) {
      setExpanded(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchFilter(e.target.value);
  }

  return (
    <div className={`SearchBox ${ expanded ? 'expanded': '' }`}
      onFocus={ expandSearch }>
      <SearchIcon onClick={ expandSearch } />
      <input ref={ inputRef } onBlur={ hideSearch }
        value={ searchFilter } onChange={ (e) => handleChange(e) }
        placeholder="Titles, people, genres" type="text"/>
    </div>
  )
}

export default SearchBox;
