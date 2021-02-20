import React from 'react';
import styles from './game.module.scss';

export default function Cell({icon}) {

  function importAll(r) {
    let images = {};
    console.log(r.keys());
    r.keys().map((item, index) => { 
      images[item.replace('./', '')] = r(item);
      console.log(r(item)); 
  });
    console.log(images);
    return images;
  }

  const numbers = [
    1, 2, 3, 4, 5, 6
  ]
  return (
    <div className={styles.cell}>
      <div className={styles.wrapper}>
        {numbers.map((value, index) => {
          return (
            <img src={`/images/icons/${icon.row}/${value}.svg`} key={index} alt = {`/images/icons/${icon.row}/${value}.svg`}/>
          );
        })}
      </div>
    </div>
  )
}