import React, { useContext } from 'react';
import Context from '../../context';
import ModalRules from '../modal/rules/rules';
import ModalScore from '../modal/score/score';
import styles from './buttons.module.scss'
//import RowContent from './rowComponent';

const NAME_BUTTONS = ['Настройки']

export default function Buttons() {
  const { newGame } = useContext(Context);
  return (
    <div className={styles.buttons}>
      <button
        onClick = {newGame.bind(null)}>
        Новая игра             
      </button>
      <ModalRules />
      <ModalScore />
      {NAME_BUTTONS.map((item, index) => {
        return (
          <button key={index}>
            {item}             
          </button>
          );
        })}
    </div>
  )
}