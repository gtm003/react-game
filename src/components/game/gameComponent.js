import React from 'react';
import styles from './game.module.scss';
import FieldTips from './fieldTips';
import FieldCells from './fieldCells';

export default function GameComponent(props) {
  return (
    <div className={styles.game}>
      <FieldCells field = {props.field}/>
      <FieldTips tips = {props.tips}/>
    </div>
  )
}
