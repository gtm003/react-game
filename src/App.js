import React from 'react';
import Header from './components/header/header';
import GameComponent from './components/game/gameComponent';
import Footer from './components/footer/footer';
import Context from './context';
import { GameModel } from './model/gameModel';
const game = new GameModel(6);
const tips = game.tips;

function App() {

  const [field, setField] = React.useState(game.field);

  function removeGuess(indexRow, indexColumn, value, e) {
    e.preventDefault();
    game.removeGuess(indexRow, indexColumn, value);
    setField(
      field.map((item, index) => item = game.field[index])
    )
  }

  function openCell(indexRow, indexColumn, value) {
    game.openCell(indexRow, indexColumn, value);
    setField(
      field.map((item, index) => item = game.field[index])
    )
  }

  function checkTip(tip) {
    game.checkTip(tip);
  }

  return (
    <Context.Provider value = {{removeGuess, openCell, checkTip,}}>
      <div className = 'wrapper'>
        <Header />
        <GameComponent tips = {tips} field = {field}/>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
