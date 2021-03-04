import React from 'react';
import styles from './game.module.scss';
import FieldTips from './fieldTips';
import FieldCells from './fieldCells';
import Victory from '../modal/victory/victory';
import ModalSettings from '../modal/settings/settings';
import Defeat from '../modal/defeat/defeat';

export default function GameComponent(props) {
  return (
    <div className={styles.game}>
      <FieldCells field = {props.field}/>
      <FieldTips tipsRow = {props.tipsRow} tipsColumn = {props.tipsColumn}/>
      <Victory victory = {props.victory}/>
      <Defeat defeat = {props.defeat}/>
      <ModalSettings isSettingsOpened = {props.isSettingsOpened} />
    </div>
  )
}

