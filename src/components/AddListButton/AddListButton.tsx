import React from 'react';

import { ReactComponent as PlusIcon } from 'svg/icons/PlusIcon.svg';

import './AddListButton.scss';

const AddListButton: React.FC = () => {
  return (
    <button className="AddListButton">
      <PlusIcon />
      <h4>ADD LIST</h4>
    </button>
  )
}

export default AddListButton;
