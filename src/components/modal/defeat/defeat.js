import React, { useContext } from 'react';
import Context from '../../../context';
import styles from './defeat.module.scss'
//import RowContent from './rowComponent';

export default function Defeat(props) {
  const {onToggleDefeat} = useContext(Context);
  return (
    <React.Fragment>
    {props.defeat && (<div className={styles.defeat} onClick = {() => onToggleDefeat()}>
      <div className={styles.defeatBody}>
        <h3>ВЫ ПРОИГРАЛИ...</h3>
        <p>Вы можете зайти в настроки и включить возможность на ошибку</p>
      </div>
    </div>)}
    </React.Fragment>
  )
}