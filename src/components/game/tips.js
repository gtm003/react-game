import React from 'react';
import { getIcon } from '../../data/icons';
import styles from './game.module.scss';

export default function Tips() {
  return (
    <div className={styles.tips}>
      <span style = {styles.h1}>{getIcon(1,1)}</span>
    </div>
  )
}