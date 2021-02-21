import React from 'react';
import { getIcons } from '../../data/icons';
import Cell from './cell';
import styles from './game.module.scss';

export default function Field(props) {
  //const icons = getIcons(6);
  const getRowContent = props.icons.map((icon) =>
  <div key={icon.id.toString()}>
    <Cell icon = {icon}/>
  </div>,
);
  return (
    <div className={styles.field}>
      {
        getRowContent
      }
    </div>
  )
}