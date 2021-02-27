import React, { useContext } from 'react';
import Context from '../../context';
import styles from './game.module.scss';

export default function TipRow({tip}) {
  const { checkTip } = useContext(Context);
  return (
  <div className={styles.cell} >
    {tip.arr.map((item, index) => {
      return (
        <img 
          src={`/images/icons/${item.row}/${item.solve}.svg`}
          key={index}
          alt = {`${item.row}/${item.solve}.svg`}
          width = '33%'/>
      );
    })}
    <img
      src={`/images/tips/${tip.type}.svg`}
      alt = {`/images/tips/${tip.type}.svg`}
      className = {styles.type}
      onClick = {(e) => {checkTip(tip)}}
      onContextMenu = {(e) => {
        e.preventDefault();
        console.log(e.target);
        e.target.classList.toggle('hidden');
      }}
      height = '100%'
      width = '100%'/>
  </div>
  )
}