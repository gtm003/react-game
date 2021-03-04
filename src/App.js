import React from 'react';
import Header from './components/header/header';
import GameComponent from './components/game/gameComponent';
import Footer from './components/footer/footer';
import Context from './context';
import { GameModel } from './model/gameModel';
import Music from './components/audio/music';

let game = new GameModel(6, true);
let unDo = false;

function App() {
  const [field, setField] = React.useState(game.field);
  const [tipsRow, setTipsRow] = React.useState(game.tipsRow);
  const [tipsColumn, setTipsColumn] = React.useState(game.tipsColumn);
  const [victory, setVictory] = React.useState(false);
  const [defeat, setDefeat] = React.useState(false);
  const [timeReset, setTimeReset] = React.useState(true);
  const [timePause, setTimePause] = React.useState(false);
  const [error, setError] = React.useState(0);
  const [isSettingsOpened, setIsSettingsOpened] = React.useState(false);
  const timeValue = Number(localStorage.getItem('time'));
  const [musicVolume, setMusicVolume] = React.useState(0.3);
  
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
      if (unDo) {
        setError(error + 1);
      } else {
        setDefeat(!defeat);
      }
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

  function onToggleAllTips() {
    game.tipsColumn.map(item => item.hidden = !item.hidden);
    setTipsColumn(
      tipsColumn.map((item, index) => item = game.tipsColumn[index])
    );
    game.tipsRow.map(item => item.hidden = !item.hidden);
    setTipsRow (
      tipsRow.map((item, index) => item = game.tipsRow[index])
    );
  }

  function checkTip(tip) {
    game.checkTip(tip);
  }

  function soundPlay(src) {
    let audio = new Audio();
    let volume;
    if (localStorage.getItem('soundVolume')) volume = localStorage.getItem('soundVolume')
    else volume = 10;
    audio.src = src;
    audio.volume = volume / 100;
    audio.play();
  }

  function pauseGame() {
    setTimePause(!timePause);
    onToggleAllTips();
  }

  function newGame() {
    game = new GameModel(6, false);
    const difficulty = localStorage.getItem('difficulty');
    game.openRandomCells(difficulty);
    setField(game.field);
    setTipsRow(game.tipsRow);
    setTipsColumn(game.tipsColumn);
    setError(0);
    setTimeReset(!timeReset);
    if(timePause) setTimePause(!timePause);
  }

  function onToggleSettings() {
    setIsSettingsOpened(!isSettingsOpened);
  }

  function setResult(name) {
    setVictory(!victory);
    newGame();
    const time = localStorage.getItem('time');
    const difficulty = localStorage.getItem('difficulty');
    let score;
    if (localStorage.getItem(`score${difficulty}`)) {
      score = JSON.parse(localStorage.getItem(`score${difficulty}`));
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
    localStorage.setItem(`score${difficulty}`, JSON.stringify(score));
  }

  function onChangeMusicVolume (volume) {
    setMusicVolume(volume);
    const audio = document.getElementById("music");
    audio.volume = volume / 100;
    localStorage.setItem('musicVolume', volume);
  }

  function switchOnMusicVolume () {
    let volume;
    if (localStorage.getItem('musicVolume')) volume = localStorage.getItem('musicVolume')
    else volume = 10;
    const audio = document.getElementById("music");
    audio.volume = volume / 100;
    audio.play();
  }

  function onChangeUnDo (value) {
    unDo = value;
    console.log(unDo);
  }

  function onToggleDefeat () {
    setDefeat(!defeat);
    newGame();
  }
  document.addEventListener("click", switchOnMusicVolume);
  return (
    <Context.Provider value = {{removeGuess, openCell, checkTip, newGame, onToggleSettings, pauseGame, onToggleTip,
      onToggleAllTips, setResult, onChangeMusicVolume, onChangeUnDo, onToggleDefeat}}>
      <div className = 'wrapper'>
        <Header reset = {timeReset} pause = {timePause} time = {timeValue} error = {error}/>
        <GameComponent tipsRow = {tipsRow} tipsColumn = {tipsColumn} field = {field} victory = {victory} defeat = {defeat}
          isSettingsOpened = {isSettingsOpened} musicVolume = {musicVolume} />
        <Music src="/audio/backgroundMusic.mp3" volume = {musicVolume} />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;