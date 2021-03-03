import React, { useContext } from 'react';
import Context from '../../context';
import styles from './game.module.scss';
import TipRow from './tipRowComponent';
import TipColumn from './tipColumnComponent';
import Buttons from './buttons';

export default function FieldTips(props) {
  const { pauseGame } = useContext(Context);
  return (
    <div className={styles.fieldTips}>
      <div className={styles.tipsRow}>
        {props.tipsRow.map((item, index) => {
          return (
            <TipRow tip = {item} key = {index} id = {index}/>
          )
        })}
      </div>
      <div className = {styles.wrapperTipsColumButton}>
        <div className={styles.tipsColumn}>
          {props.tipsColumn.map((item, index) => {
            return (
              <TipColumn tip = {item} key = {index} id = {index}/>
            )
          })}
        </div>
        <div className = {styles.wrapperButtons}>
      </div>

      </div>
      <Buttons />
    </div>

  )
}