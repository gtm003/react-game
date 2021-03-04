import React from 'react';
import styles from './modalScore.module.scss';


export default class ModalScore extends React.Component {
  state = {
    isOpen: false,
    index: Number(localStorage.getItem('difficulty'))
  }
    
  render() {
    const score0 = new Array(10).fill(['', '']);
    if (localStorage.getItem('score0')) {
      const scoreLocalStorage = JSON.parse(localStorage.getItem('score0'));
      scoreLocalStorage.forEach((item, index) => score0[index] = item);
    }
    const score1 = new Array(10).fill(['', '']);
    if (localStorage.getItem('score1')) {
      const scoreLocalStorage = JSON.parse(localStorage.getItem('score1'));
      scoreLocalStorage.forEach((item, index) => score1[index] = item);
    }
    const score2 = new Array(10).fill(['', '']);
    if (localStorage.getItem('score2')) {
      const scoreLocalStorage = JSON.parse(localStorage.getItem('score2'));
      scoreLocalStorage.forEach((item, index) => score2[index] = item);
    }
    const spanRightStyle = {
      float: 'right'
    };
    return (
      <React.Fragment>
      <button onClick = {() => this.setState({isOpen: true})}>Доска почета</button>

      {this.state.isOpen && (<div className = {styles.modal} >
        <div className = {styles.modalBody}>
          {this.state.index === 0 && (<div className = {styles.page}>
            <h1>Доска почета</h1>
            <h2>Сложность игры: сложная</h2>
            <ol>
              {
                score0.map((item, index) => {
                  return (
                    <li key = {index}><span>{item[0]}</span><span style = {spanRightStyle}>{FormattedTime(item[1])}</span></li>
                  )
                })
              }
            </ol>

          </div>)}
          {this.state.index === 1 && (<div className = {styles.page}>
            <h1>Доска почета</h1>
            <h2>Сложность игры: средняя</h2>
            <ol>
              {
                score1.map((item, index) => {
                  return (
                    <li key = {index}><span>{item[0]}</span><span style = {spanRightStyle}>{FormattedTime(item[1])}</span></li>
                  )
                })
              }
            </ol>
          </div>)}

          {this.state.index === 2 && (<div className = {styles.page}>
            <h1>Доска почета</h1>
            <h2>Сложность игры: простая</h2>
            <ol>
              {
                score2.map((item, index) => {
                  return (
                    <li key = {index}><span>{item[0]}</span><span style = {spanRightStyle}>{FormattedTime(item[1])}</span></li>
                  )
                })
              }
            </ol>
          </div>)}

          <div className = {styles.slaiderBtn}>
            {this.state.index > 0 && (<button onClick = {() => this.setState({index: this.state.index - 1})}
            className = {styles.btnLeft}>&#60;</button>)}
            <button className = {styles.btnIndex} >{this.state.index + 1}</button>
            {this.state.index < 2 && (<button onClick = {() => this.setState({index: this.state.index + 1})}
            className = {styles.btnRight}>&#62;</button>)}
          </div>
          <button
            className = {styles.close}
            onClick = {() => this.setState({isOpen: false})}>&#10006;</button>
        </div>
      </div>)}
    </React.Fragment>
    )
  }
}

function FormattedTime(time) {
  let timeToString;
  if (!time) timeToString = ''
  else {
    const hour = Math.floor(time / 3600);
    const min = Math.floor((time % 3600) / 60);
    const sec = time % 60;
    function addZero(n) {
      return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }
    timeToString = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
  }

  return timeToString;
}