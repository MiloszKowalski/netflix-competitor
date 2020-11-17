import React, { useContext, useCallback, useRef } from 'react';

import { MovieContext } from 'contexts/MovieContext';
import './MultiSelectOption.scss';

type Props = {
  name: string
}

const MultiSelectOption: React.FC<Props> = ({ name }) => {
  const { enabledGenres, toggleGenre } = useContext(MovieContext);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isEnabled = useCallback(() => {
    return enabledGenres.findIndex(x => x === name) !== -1;
  }, [enabledGenres, name]);


  return (
    <li>
      <button ref={ buttonRef } onMouseDown={ () => toggleGenre(name) }
        className={`MultiSelectDropdown__button--option ${isEnabled() ? 'active' : ''}`}>
        { name }
      </button>
    </li>
  )
}

export default MultiSelectOption;