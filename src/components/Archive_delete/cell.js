/*
import React, { useContext } from 'react';
import Context from '../../context';
import styles from './game.module.scss';

export default function Cell({icon}) {
  const { removeIcon } = useContext(Context);
  const { selectIcon } = useContext(Context);
  return (
    <div className={styles.cell}>
      {
        icon.content.length === 1 ?

        <img 
        src={`/images/icons/${icon.row}/${icon.content[0]}.svg`}
        alt = {`/images/icons/${icon.row}/${icon.content[0]}.svg`}
        width = '64px'/> :
        
        <div className={styles.wrapper}>
        {icon.content.map((value, index) => {
          return (
            <img 
              src={`/images/icons/${icon.row}/${value}.svg`}
              key={index}
              alt = {`/images/icons/${icon.row}/${value}.svg`}
              className = {styles[`icon${value}`]}
              onContextMenu = {(e) => removeIcon(icon, value, e)}
              onClick = {selectIcon.bind(null, icon, value)}/>
            );
          })}
        </div>
      }
    </div>
  )
}*/