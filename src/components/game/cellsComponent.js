import React, { useContext } from 'react';
import Context from '../../context';
import styles from './game.module.scss';
import Icons from '../../assets/icons'

export default function CellComponent({guessCell, rowIndex, columnIndex}) {
  guessCell = Array.from(guessCell);
  const { removeGuess } = useContext(Context);
  const { openCell } = useContext(Context);
  return (
    <div className={styles.cell}>
      <Icons />
      {
        guessCell.length === 1 ?

        <div className = {styles.iconOpen}>
          <svg viewBox="0 0 32 32" width="100%" height="100%"> 
            <use xlinkHref={`#${rowIndex}${guessCell[0] - 1}`}/>
          </svg>
        </div> :
        
        <div className={styles.wrapper}>
        {guessCell.map((value, index) => {
          //console.log(`#${rowIndex}${value - 1}`);
          return (
            <div className = {styles[`icon${value}`]} key={index} onClick = {openCell.bind(null, rowIndex, columnIndex, value)} 
            onContextMenu = {(e) => {
              removeGuess(rowIndex, columnIndex, value, e);
            }}>
              <svg viewBox="0 0 32 32" width="100%" height="100%"> 
                <use xlinkHref={`#${rowIndex}${value - 1}`}/>
              </svg>
            </div>
          );          
        })}
        </div>
      }
    </div>
  )
}