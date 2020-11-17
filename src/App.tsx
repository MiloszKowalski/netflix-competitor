import React from 'react';

import TopMenu from 'components/TopMenu';
import TopMenuContextProvider from 'contexts/TopMenuContext';

function App() {
  return (
    <TopMenuContextProvider>
      <div className="App">
        <TopMenu />
      </div>
    </TopMenuContextProvider>
  );
}

export default App;
