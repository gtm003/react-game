import React, { useContext } from 'react';
import Context from '../../context';
import ModalRules from '../modal/rules';
import styles from './buttons.module.scss'
//import RowContent from './rowComponent';

const NAME_BUTTONS = ['Доска почета', 'Настройки']

export default function Buttons() {
  const { newGame } = useContext(Context);
  const { openModal } = useContext(Context);
  return (
    <div className={styles.buttons}>
      <button
        onClick = {newGame.bind(null)}>
        Новая игра             
      </button>
      <ModalRules />
      {NAME_BUTTONS.map((item, index) => {
        return (
          <button key={index}
            onClick = {openModal.bind(null, index)}>
            {item}             
          </button>
          );
        })}
    </div>
  )
}