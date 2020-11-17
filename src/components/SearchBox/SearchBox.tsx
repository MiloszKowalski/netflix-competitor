import React, { useState, useRef } from 'react';

import { ReactComponent as SearchIcon } from 'svg/icons/SearchIcon.svg';

import './SearchBox.scss';

const SearchBox: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function expandSearch() {
    if (!inputRef.current) return;
    setExpanded(true);
    inputRef.current.focus();
  }

  function hideSearch() {
    if (!inputRef.current) return;
    if (!inputRef.current.value.length) {
      setExpanded(false);
    }
  }

  return (
    <div className={`SearchBox ${ expanded ? 'expanded': '' }`}
      onFocus={ expandSearch }>
      <SearchIcon onClick={ expandSearch } />
      <input ref={ inputRef } onBlur={ hideSearch }
        placeholder="Titles, people, genres" type="text"/>
    </div>
  )
}

export default SearchBox;