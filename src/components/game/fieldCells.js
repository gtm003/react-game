import React from 'react';
import styles from './game.module.scss';
import RowContent from './rowComponent';

export default function FieldCells({field}) {
  //console.log(field[0].solve);
  return (
    <div className={styles.field}>
      {field.map((item, index) => {
        item = item.guessNumber;
        return (
          <div
            key={index}>
              <RowContent guessRow = {item} rowIndex = {index}/>             
            </div>
            );
          })}
    </div>
  )
}

