import React, { useContext } from 'react';
import Context from '../../../context';
import styles from './modalSettings.module.scss'
//import RowContent from './rowComponent';

export default function ModalSettings(props) {
  const { onToggleSettings } = useContext(Context);
  const { onChangeMusicVolume } = useContext(Context);
  function musicVolume() {
    return localStorage.getItem('musicVolume') ? localStorage.getItem('musicVolume') : 10;
  }
  function soundVolume() {
    return localStorage.getItem('soundVolume') ? localStorage.getItem('soundVolume') : 10;
  }
  const rightStyle = {
    float: 'right'
  };  
  return (
    <React.Fragment>
    {props.isSettingsOpened && (<div className = {styles.modal} >
      <div className = {styles.modalBody}>
        <h3>Настройки</h3>
        <div>
          <span>Уровень сложности</span>
          <select style = {rightStyle} defaultValue = '1' onChange={(event)=>console.log(`Hard: ${event.target.value}`)}>
            <option value="0">сложный</option>
            <option value="1">средний</option>
            <option value="2">простой</option>
          </select>
        </div>
        <div>
          <span>Громкость музыки</span>
          <input type='range' min='0' max='100' defaultValue = {musicVolume()} 
            onChange={(event) => onChangeMusicVolume(event.target.value)}/>
        </div>
        <div>
          <span>Громкость звуков</span>
          <input type='range' min='0' max='100' defaultValue = {soundVolume()} 
            onChange={(event) => localStorage.setItem('soundVolume', event.target.value)}/>
        </div>
        <div>
          <input type='checkbox'></input>
          <span>Отмена хода</span>
        </div>
        <div>
          <input type='checkbox'></input>
          <span>Проверить подсказку</span>
        </div>

        <button
          className = {styles.close}
          onClick = {onToggleSettings.bind(null)}>&#10006;</button>
      </div>
    </div>)}
  </React.Fragment>
  )
}
