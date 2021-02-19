import React from 'react';
import Header from './components/header/header';
import Game from './components/game/game';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className = 'wrapper'>
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
