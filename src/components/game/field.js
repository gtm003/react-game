import React from 'react';
import { getIcons } from '../../data/icons';
import Cell from './cell';
import styles from './game.module.scss';

export default function Field() {
  const icons = getIcons(6);
  const numbers = [0, 1, 2, 3, 4, 5];
  const getRowContent = icons.map((icon) =>
  <div key={icon.id.toString()}>
    <Cell icon = {icon}/>
  </div>,
  console.log(icons)
);
  return (
    <div className={styles.field}>
      {
        getRowContent
      }
    </div>
  )
}