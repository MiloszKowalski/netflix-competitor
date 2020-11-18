import React from 'react';

import Footer from 'components/Footer';
import Modal from 'components/Modal';
import TopMenu from 'components/TopMenu';

import Home from 'views/Home';

import MovieContextProvider from 'contexts/MovieContext';
import TopMenuContextProvider from 'contexts/TopMenuContext';

function App() {
  return (
    <TopMenuContextProvider>
      <MovieContextProvider>
        <div className="App">
          <TopMenu />
          <Modal />
          <Home />
          <Footer />
        </div>
      </MovieContextProvider>
    </TopMenuContextProvider>
  );
}

export default App;
