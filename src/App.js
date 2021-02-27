import React from 'react';
//import useSound from 'use-sound';
import Header from './components/header/header';
import GameComponent from './components/game/gameComponent';
import Footer from './components/footer/footer';
import Context from './context';
import { GameModel } from './model/gameModel';
import Modal from './components/modal/rules';
//import correctEvent from '../public/audio/correct.mp3';
let game = new GameModel(6);
//const tipsRow = game.tipsRow;
//const tipsColumn = game.tipsColumn;

function App() {

  const [field, setField] = React.useState(game.field);
  const [tipsRow, setTipsRow] = React.useState(game.tipsRow);
  const [tipsColumn, setTipsColumn] = React.useState(game.tipsColumn);
  const [time, setTime] = React.useState(0);

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
  }

  function checkTip(tip) {
    game.checkTip(tip);
  }

  function soundPlay(src) {
    let audio = new Audio();
    audio.src = src;
    audio.play();
  }

  function newGame() {
    console.log('New Game');
    game = new GameModel(6);
    console.log(game.field[0].solve);
    setField(
      game.field
    )
    setTipsRow(
      game.tipsRow
    )
    setTipsColumn(
      game.tipsColumn
    )
    setTime(
      0
    )
  }

  function openModal(index) {
    console.log(index);
  }

  return (
    <Context.Provider value = {{removeGuess, openCell, checkTip, newGame, openModal}}>
      <div className = 'wrapper'>
        <Header time = {time}/>
        <GameComponent tipsRow = {tipsRow} tipsColumn = {tipsColumn} field = {field}/>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
