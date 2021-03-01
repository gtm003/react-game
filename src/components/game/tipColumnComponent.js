import React, { useContext } from 'react';
import Context from '../../context';
import styles from './game.module.scss';

export default function TipColumn(props) {
  const { checkTip } = useContext(Context);
  const {onToggleTip} = useContext(Context);
  const classes = [styles.cell];
  if (props.tip.hidden === true) {
    classes.push('hidden');
  }
  return (
  <div className={classes.join(' ')} >
    {props.tip.arr.map((item, index) => {
      return (
        <img 
          src={`/images/icons/${item.row}/${item.solve}.svg`}
          key={index}
          alt = {`${item.row}/${item.solve}.svg`}
          onContextMenu = {(e) => {
            e.preventDefault();
            onToggleTip(props.tip, props.id);
          }}
          width = '100%'/>
      );
    })}
  </div>
  )
}