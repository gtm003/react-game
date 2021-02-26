import React from 'react';
import styles from './game.module.scss';
import TipRow from './tipRowComponent';
import TipColumn from './tipColumnComponent';

export default function FieldTips(props) {
  return (
    <div>
      <div className={styles.tipsRow}>
        {props.tipsRow.map((item, index) => {
          return (
            <TipRow tip = {item} key = {index}/>
          )
        })}
      </div>
      <div className={styles.tipsColumn}>
      {props.tipsColumn.map((item, index) => {
          return (
            <TipColumn tip = {item} key = {index}/>
          )
        })}
      </div>
    </div>

  )
}