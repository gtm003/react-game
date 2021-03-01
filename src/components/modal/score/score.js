import React from 'react';
import styles from './modal.module.scss';

export default class ModalScore extends React.Component {
  state = {
    isOpen: false,
    index: 0
  }
  render() {
    return (
      <React.Fragment>
      <button onClick = {() => this.setState({isOpen: true})}>Доска почета</button>

      {this.state.isOpen && (<div className = {styles.modal} >
        <div className = {styles.modalBody}>
          {this.state.index === 0 && (<div className = {styles.page}>
            <h3>Доска почета</h3>

          </div>)}

          {this.state.index === 1 && (<div className = {styles.page}>
            <h3>Доска почета</h3>

          </div>)}

          {this.state.index === 2 && (<div className = {styles.page}>
            <h3>Доска почета</h3>

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