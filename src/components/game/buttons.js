import React, { useContext } from 'react';
import Context from '../../context';
import ModalRules from '../modal/rules/rules';
import ModalScore from '../modal/score/score';
import ModalSettings from '../modal/settings/settings';
import styles from './buttons.module.scss'

export default function Buttons() {
  const { newGame } = useContext(Context);
  const { onToggleSettings } = useContext(Context);
  //const {onToggleTip} = useContext(Context);
  const { pauseGame } = useContext(Context);
  return (
    <div className={styles.buttons}>
      <button
        onClick = {newGame.bind(null)}>
        Новая игра             
      </button>
      <button
        onClick = {() => pauseGame()}>
        Пауза
      </button>
      <button
        onClick = {() => pauseGame()}>
        Скрытые             
      </button>
      <button
        onClick = {onToggleSettings.bind(null)}>
        Настройки             
      </button>
      <ModalRules />
      <ModalScore />
    </div>
  )
}