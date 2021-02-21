import React from 'react';
import { getIcons, getSolve, getTip } from '../../data/icons';
import styles from './game.module.scss';

const icons = getSolve(6);
const tip = getTip(icons);

export default function Tips() {
  console.log(icons);
  console.log(tip);
  const type = tip.type;
  return (
    <div className={styles.tips}>
      <div className={styles.cell}>
        {tip.arr.map((item, index) => {
          return (
            <img src={`/images/icons/${item.row}/${item.content}.svg`} key={index} alt = {`/images/icons/${item.row}/${item.content}.svg`} width = '64px'/>
          );
        })}
        <img src={`/images/tips/${type}.svg`} alt = {`/images/tips/${type}.svg`} width = '64px' className = {styles.type} width = '192px'/>
      </div>

      <div className={styles.cell}>
        <img src={`/images/icons/${tip.arr[0].row}/${tip.arr[0].content}.svg`} alt = {`/images/icons/${tip.row}/${tip.content}.svg`} width = '64px'/>
        <img src={`/images/icons/${tip.arr[0].row}/${tip.arr[0].content}.svg`} alt = {`/images/icons/${tip.row}/${tip.content}.svg`} width = '64px'/>
        <img src={`/images/tips/${type}.svg`} alt = {`/images/tips/${type}.svg`} width = '64px' className = {styles.type} width = '192px'/>
      </div>
    </div>
  )
}