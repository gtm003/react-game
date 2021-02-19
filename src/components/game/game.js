import React from 'react';
import Field from './field';
import styles from './game.module.scss';
import Tips from './tips';

export default function Game() {
  return (
    <div className={styles.game}>
      <Field />
      <Tips />
    </div>
  )
}