import React, { useContext } from 'react';
import Context from '../../context';
import styles from './victory.module.scss'
//import RowContent from './rowComponent';

export default function Victory(props) {
  const {setResult} = useContext(Context);
  return (
    <React.Fragment>
    {props.victory && (<div className={styles.victory}>
      <div className={styles.victoryBody}>
        <h3>ПОЗДРАВЛЯЮ! ВЫ ВЫЙГРАЛИ!!!</h3>
        <p>
          <span>Введите ваше имя: </span>
          <input type="text" onBlur = {(event) => setResult(event.target.value)}></input>
        </p>
      </div>
    </div>)}
    </React.Fragment>
  )
}