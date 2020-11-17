import React from 'react';

import Footer from 'components/Footer';
import Home from 'views/Home';
import TopMenu from 'components/TopMenu';
import TopMenuContextProvider from 'contexts/TopMenuContext';
import MovieContextProvider from 'contexts/MovieContext';

function App() {
  return (
    <TopMenuContextProvider>
      <MovieContextProvider>
        <div className="App">
          <TopMenu />
          <Home />
          <Footer />
        </div>
      </MovieContextProvider>
    </TopMenuContextProvider>
  );
}

export default App;
