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
        <div className = {styles.iconContainer} key={index}>
        <svg viewBox="0 0 32 32" width="100%" height="100%"> 
          <use xlinkHref={`#${item.row}${item.solve - 1}`}/>
        </svg>
      </div>
      )
    })}
    <svg viewBox="0 0 192 64" width="100%" height="100%" className = {styles.type}
        onClick = {(e) => {checkTip(props.tip)}}
        onContextMenu = {(e) => {
          e.preventDefault();
          onToggleTip(props.tip, props.id);
        }}> 
      <use xlinkHref={`#${props.tip.type}`}/>
    </svg>
  </div>
  )
}