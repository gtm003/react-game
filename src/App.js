import React from 'react';
import Header from './components/header/header';
import GameComponent from './components/game/gameComponent';
import Footer from './components/footer/footer';
import Context from './context';
import { GameModel } from './model/gameModel';

let game = new GameModel(6, true);

function App() {
  const [field, setField] = React.useState(game.field);
  const [tipsRow, setTipsRow] = React.useState(game.tipsRow);
  const [tipsColumn, setTipsColumn] = React.useState(game.tipsColumn);
  const [timeReset, setTimeReset] = React.useState(true);
  const [victory, setVictory] = React.useState(false);
  const [timePause, setTimePause] = React.useState(false);
  const timeValue = Number(localStorage.getItem('time'));
  
  window.addEventListener("unload", () => {
    game.setFieldLocalStorage();
    game.setTipsLocalStorage();
  });

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
      setTimePause(!timePause);
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
      setTimePause(!timePause);
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
    setTimePause(!timePause);
  }

  function newGame() {
    game = new GameModel(6, false);
    setField(game.field);
    setTipsRow(game.tipsRow);
    setTipsColumn(game.tipsColumn);
    setTimeReset(!timeReset);
    if(timePause) setTimePause(!timePause);
  }

  function getNameWinner(name) {
    setVictory(!victory);
    newGame();
    const time = localStorage.getItem('time');
    let score;
    if (localStorage.getItem('score')) {
      score = JSON.parse(localStorage.getItem('score'));
      score.push([name, time]);
    }
    else score = [[name, time]];
    function sortArr(arr) {
      const arrSort = [];
      const arrTime = arr.map(item => item[1]);
      arrTime.sort(function (a, b) {
        return a - b;
      });
      arrTime.forEach(time => {
        let name = arr.find(item => item[1] === time)[0];
        arrSort.push([name, time])
      })
      return arrSort;
    }
    score = sortArr(score).slice(0,9);
    localStorage.setItem('score', JSON.stringify(score));
  }

  return (
    <Context.Provider value = {{removeGuess, openCell, checkTip, newGame, pauseGame, onToggleTip, getNameWinner}}>
      <div className = 'wrapper'>
        <Header reset = {timeReset} pause = {timePause} time = {timeValue}/>
        <GameComponent tipsRow = {tipsRow} tipsColumn = {tipsColumn} field = {field} victory = {victory}/>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
