import React from 'react';
import styles from './game.module.scss';
import TipRow from './tipRowComponent';

export default function FieldTips(props) {
  return (
    <div>
      <div className={styles.tipsRow}>
        {props.tips.map((item, index) => {
          return (
            <TipRow tip = {item} key = {index}/>
          )
        })}
      </div>
      <div className={styles.tipsColumn}>
        <span>1</span>
        <span>2</span>
      </div>
    </div>

  )
}