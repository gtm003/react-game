import React from 'react';
import Header from './components/header/header';
import Game from './components/game/game';
import Footer from './components/footer/footer';
import { getIcons } from './data/icons';

function App() {
  const icons = getIcons(6);
  return (
    <div className = 'wrapper'>
      <Header />
      <Game icons = {icons}/>
      <Footer />
    </div>
  );
}

export default App;
