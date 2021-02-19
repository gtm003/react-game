import React from 'react';
import Cell from './cell';
import styles from './game.module.scss';

export default function Field() {
  const numbers = [0, 1, 2, 3, 4, 5];
  const getRowContent = numbers.map((number) =>
  <div key={number.toString()}>
    <Cell />
  </div>
);
  return (
    <div className={styles.field}>
      {getRowContent}
    </div>
  )
}