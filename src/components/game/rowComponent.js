import React from 'react';
import CellComponent from './cellsComponent';
import styles from './game.module.scss';

const ICON_TYPE = ['arabic', 'dots', 'letters', 'roman', 'shapes', 'signs'];

export default function RowContent({guessRow, rowIndex}) {
  return (
    <div className={styles.row}>
      {guessRow.map((item, index) => {
        return(
        <CellComponent key={index} guessCell = {item} rowIndex = {rowIndex} columnIndex = {index}/>)
      })}
    </div>
  )
}

