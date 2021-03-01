import React, { useContext } from 'react';
import Context from '../../context';
import styles from './game.module.scss';

export default function TipRow(props) {
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
          width = '33%'/>
      );
    })}
    <img
      src={`/images/tips/${props.tip.type}.svg`}
      alt = {`/images/tips/${props.tip.type}.svg`}
      className = {styles.type}
      onClick = {(e) => {checkTip(props.tip)}}
      onContextMenu = {(e) => {
        e.preventDefault();
        onToggleTip(props.tip, props.id);
      }}
      height = '100%'
      width = '100%'/>
  </div>
  )
}