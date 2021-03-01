import React from 'react';
//import useSound from 'use-sound';
import Header from './components/header/header';
import GameComponent from './components/game/gameComponent';
import Footer from './components/footer/footer';
import Context from './context';
import { GameModel } from './model/gameModel';

let game = new GameModel(6);

function App() {
  const [field, setField] = React.useState(game.field);
  const [tipsRow, setTipsRow] = React.useState(game.tipsRow);
  const [tipsColumn, setTipsColumn] = React.useState(game.tipsColumn);
  const [time, setTime] = React.useState(true);
  const [victory, setVictory] = React.useState(false);
  const [pause, setPause] = React.useState(false);

  function removeGuess(indexRow, indexColumn, value, e) {
    e.preventDefault();
    if (value === field[indexRow].solve[indexColumn]) {
      soundPlay(`/audio/error.mp3`);
    } else {
      soundPlay(`/audio/correct.mp3`);
      game.removeGuess(indexRow, indexColumn, value);
      setField(
        field.map((item, index) => item = game.field[index])
      )
    }
    if (game.isVictory()) {
      setVictory(!victory);
      setPause(!pause);
    }
  }

  function openCell(indexRow, indexColumn, value) {
    if (value !== field[indexRow].solve[indexColumn]) {
      soundPlay(`/audio/error.mp3`);
    } else {
      soundPlay(`/audio/correct.mp3`);
      game.openCell(indexRow, indexColumn, value);
      setField(
        field.map((item, index) => item = game.field[index])
      )
    }
    if (game.isVictory()) {
      setVictory(!victory);
      setPause(!pause);
    }
  }

  function onToggleTip(tip, id) {
    if (tip.type === 'oneColumn') {
      game.tipsColumn[id].hidden = !game.tipsColumn[id].hidden;
      setTipsColumn(
        tipsColumn.map((item, index) => item = game.tipsColumn[index])
      )
    } else {
      game.tipsRow[id].hidden = !game.tipsRow[id].hidden;
      setTipsRow (
        tipsRow.map((item, index) => item = game.tipsRow[index])
      )
    }
  }

  function checkTip(tip) {
    game.checkTip(tip);
  }

  function soundPlay(src) {
    let audio = new Audio();
    audio.src = src;
    audio.volume = 0.1;
    audio.play();
  }

  function pauseGame() {
    setPause(!pause);
  }

  function newGame() {
    game = new GameModel(6);
    setField(game.field);
    setTipsRow(game.tipsRow);
    setTipsColumn(game.tipsColumn);
    setTime(!time);
    if(!pause) setPause(!pause);
  }

  function getNameWinner(name) {
    setVictory(!victory);
    newGame();
    console.log(name);
  }

  return (
    <Context.Provider value = {{removeGuess, openCell, checkTip, newGame, pauseGame, onToggleTip, getNameWinner}}>
      <div className = 'wrapper'>
        <Header time = {time} pause = {pause}/>
        <GameComponent tipsRow = {tipsRow} tipsColumn = {tipsColumn} field = {field} victory = {victory}/>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
