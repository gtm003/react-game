import React, { useContext } from 'react';
import Context from '../../context';
import styles from './game.module.scss';

const ICON_TYPE = ['arabic', 'dots', 'letters', 'roman', 'shapes', 'signs'];

export default function CellComponent({guessCell, rowIndex, columnIndex}) {
  guessCell = Array.from(guessCell);
  const { removeGuess } = useContext(Context);
  const { openCell } = useContext(Context);
  return (
    <div className={styles.cell}>
      {
        guessCell.length === 1 ?

        <img 
        src={`/images/icons/${ICON_TYPE[rowIndex]}/${guessCell[0]}.svg`}
        alt = {`/images/icons/${ICON_TYPE[rowIndex]}/${guessCell[0]}.svg`}
        width = '64px'/> :
        
        <div className={styles.wrapper}>
        {guessCell.map((value, index) => {
          return (
            <img 
              src={`/images/icons/${ICON_TYPE[rowIndex]}/${value}.svg`}
              key={index}
              alt = {`/images/icons/${ICON_TYPE[rowIndex]}/${value}.svg`}
              className = {styles[`icon${value}`]}
              onContextMenu = {(e) => removeGuess(rowIndex, columnIndex, value, e)}
              onClick = {openCell.bind(null, rowIndex, columnIndex, value)}/>
            );
          })}
        </div>
      }
    </div>
  )
}