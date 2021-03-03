import React from 'react';
import styles from './game.module.scss';
import FieldTips from './fieldTips';
import FieldCells from './fieldCells';
import Victory from './victory';
import ModalSettings from '../modal/settings/settings';

export default function GameComponent(props) {
  return (
    <div className={styles.game}>
      <FieldCells field = {props.field}/>
      <FieldTips tipsRow = {props.tipsRow} tipsColumn = {props.tipsColumn}/>
      <Victory victory = {props.victory}/>
      <ModalSettings isSettingsOpened = {props.isSettingsOpened} />
    </div>
  )
}

