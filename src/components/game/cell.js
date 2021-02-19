import React from 'react';
import styles from './game.module.scss';
import icon1 from '../../assets/icons/letters/1.svg';
import icon2 from './images/2.svg';
//import images from '../../assets/icons/letters';
/*
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
*/
//const icons = importAll(require.context('./', false, '/\.svg/'));

export default function Cell(props) {

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
  
  //const images = importAll(require.context('./images', false, /\.svg/));

  const images = require('./images/2.svg');

//const images = importAll(require.context('./images', false, '/\.svg/'));

//<img src={images['0.png']} />

  const arabic = [
    1, 2, 3, 4, 5, 6
  ]
  return (
    <div className={styles.cell}>
      <div className={styles.wrapper}>
        {arabic.map((value, index) => {
          return (
            //<img src={icon2} key={index} alt={value}></img>
            <img src={`/images/icons/letters/${value}.svg`} key={index}/>
            /*
            <button key={index} className={styles.value}>
              {value}
            </button>*/
          );
        })}
      </div>
    </div>
  )
}