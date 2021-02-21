import React from 'react';
import Field from './field';
import styles from './game.module.scss';
import Tips from './tips';

export default function Game(props) {
  return (
    <div className={styles.game}>
      <Field icons = {props.icons}/>
      <Tips />
    </div>
  )
}