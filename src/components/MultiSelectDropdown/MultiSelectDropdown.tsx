import React, { useState } from 'react';

import MultiSelectOption from './MultiSelectOption';

import './MultiSelectDropdown.scss';

type Props = {
  title: string,
  options: string[]
}

const MultiSelectDropdown: React.FC<Props> = ({ title, options }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="MultiSelectDropdown">
      <button onClick={ () => setExpanded(!expanded) }
        className="MultiSelectDropdown__button">
        { title }
      </button>
      { expanded && <ul className="MultiSelectDropdown__list">
        {options.map(x => (
          <MultiSelectOption key={x} name={x} />
        ))}
      </ul> }
    </div>
  )
}

export default MultiSelectDropdown;