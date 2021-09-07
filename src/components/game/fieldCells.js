import React from 'react';
import styles from './game.module.scss';
import RowContent from './rowComponent';

export default function FieldCells({field}) {
  //console.log(field[0].solve);
  return (
    <div className={styles.fieldCells}>
      {field.map((item, index) => {
        item = item.guessNumber;
        return (
          <RowContent guessRow = {item} rowIndex = {index} key={index}/>
            );
          })}
    </div>
  )
}

