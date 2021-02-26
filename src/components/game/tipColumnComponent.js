import React, { useContext } from 'react';
import Context from '../../context';
import styles from './game.module.scss';

export default function TipColumn({tip}) {
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
  </div>
  )
}