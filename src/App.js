import React from 'react';
import Header from './components/header/header';
import Game from './components/game/game';
import Footer from './components/footer/footer';
import Context from './context';
import { getIcons } from './data/icons';

function App() {
  const [icons, setIcons] = React.useState(getIcons(6));
  //const solve = getSolve(6);

  function removeIcon(id, index) {
    console.log(`${id}   ${index}`);
    setIcons(
      icons.map(icon => {
        if (icon.id === id) {
          icon.content.splice(index, 1);
        }
        return icon;
      })
    )
  }

  //const icons = getIcons(6);
  return (
    <Context.Provider value = {{removeIcon : removeIcon}}>
      <div className = 'wrapper'>
        <Header />
        <Game icons = {icons}/>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
