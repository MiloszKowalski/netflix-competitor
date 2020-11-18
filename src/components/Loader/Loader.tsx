import React from 'react';

import './Loader.scss';

const Loader: React.FC = () => {
  return (
    <div className="Loader">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;