import React, { useContext } from 'react';
import Context from '../../context';
import styles from './game.module.scss';

export default function Cell({icon}) {
  const { removeIcon } = useContext(Context);
  return (
    <div className={styles.cell}>
      <div className={styles.wrapper}>
        {icon.content.map((value, index) => {
          return (
            <img 
              src={`/images/icons/${icon.row}/${value}.svg`}
              key={index}
              alt = {`/images/icons/${icon.row}/${value}.svg`}
              className = {styles[`icon${value}`]}
              onClick = {removeIcon.bind(null, icon.id, index)}
              //onClick = {() => console.log(index)}
            />
          );
        })}
      </div>
    </div>
  )
}