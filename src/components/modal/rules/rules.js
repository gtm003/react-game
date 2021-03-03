import React from 'react';
import styles from './modalRules.module.scss';

export default class ModalRules extends React.Component {
  state = {
    isOpen: false,
    index: 0,
  }
  render() {
    return (
      <React.Fragment>
      <button onClick = {() => this.setState({isOpen: true})}>Правила игры</button>

      {this.state.isOpen && (<div className = {styles.modal} >
        <div className = {styles.modalBody}>
          {this.state.index === 0 && (<div className = {styles.page}>
            <h3>Правила игры</h3>
            <p>Правила игры очень простые: надо открыть все фишки в квадрате 6х6 фишек.
                После того как все фишки будут открыты, квадрат будет выглядеть следующим образом:</p>
            <img src = '/react-game/images/png/field.png' alt = 'field' height = '250px'/>
            <p>В каждой строке квадрата находятся фишки одного типа, например в первой строке квадрата
              находятся арабские цифры, во второй - латинские буквы, в третьей римские цифры,
              в четвертой игральные кости, в пятой - геометрические фигуры, в шестой - математические символы.</p>
          </div>)}
          {this.state.index === 1 && (<div className = {styles.page}>
            <h3>Правила игры</h3>
              <p>Открывать фишки надо методом исключения. Когда фишка не открыта на ее месте показываются все возможные варианты. Например, изображение</p>
              <img src = '/react-game/images/png/cell.png' alt = 'cell' height = '100px'/>
              <p>обозначает, что в данном месте могут находится любые римские цифры кроме 	&#8546; (квадратик с изображением 	&#8546; отсутствует).
                Чтобы открыть фишку надо нажать на её уменьшенное изображение левой кнопкой мыши.
              </p>
              <p>Для того, чтобы решить головоломку нужно использовать подсказки. Подсказки бывают двух типов: вертикальные и горизонтальные.
                Вертикальные подсказки выглядят так:</p>
              <img src = '/react-game/images/png/tipColumn.png' alt = 'tipColumn' height = '100px'/>
          </div>)}

          {this.state.index === 2 && (<div className = {styles.page}>
            <h3>Правила игры</h3>
            <p>Такая подсказка обозначает что цифра	&#8548; и фигура "+" находятся в одной колонке, при этом не важно, какой из этих символов находится выше, а какой ниже.</p>
              <p>Горизонтальные подсказки делятся на несколько типов. Самая простая подсказка говорит о том что две фишки
                находятся в соседних колонках, при этом неизвестно, какая фишка находится левее, а какая правее:
              </p>
              <img src = '/react-game/images/png/tipAdjacent1.png' alt = 'tipAdjacent1' height = '50px'/>
              <p>Подсказка следующего типа говорит о том что одна фишка находится в колонке левее другой.
                Эта подсказка ничего не говорит о том на каком расстоянии друг от друга находятся фишки.
                Они могут оказаться как в соседних колонках так и находится на значительном расстоянии друг от друга:
              </p>
              <img src = '/react-game/images/png/tipPosition.png' alt = 'tipPosition' height = '50px'/>
          </div>)}

          {this.state.index === 3 && (<div className = {styles.page}>
            <h3>Правила игры</h3>
            <p>Последний тип подсказки указывает, что одна фишка находится между двуми другими:</p>
              <img src = '/react-game/images/png/tipAdjacent2.png' alt = 'tipAdjacent2' height = '50px'/>
              <p>Все три фишки находятся в соседних колонках, фишка указанная в центре всегда находится между двуми другими,
                но какая фишка находится правее центральной, а какая левее - неизвестно.
              </p>
              <p>Использованные подсказки удобно удалять, пользуясь правой кнопкой мыши. Удаленные подсказки
                можно посмотреть, нажав на кнопку "Скрытые". Повторное нажатие на эту кнопку снова покажет неудаленные подсказки.
              </p>
          </div>)}

            <div className = {styles.slaiderBtn}>
              {this.state.index > 0 && (<button onClick = {() => this.setState({index: this.state.index - 1})}
              className = {styles.btnLeft}>&#60;</button>)}
              <button className = {styles.btnIndex} >{this.state.index + 1}</button>
              {this.state.index < 3 && (<button onClick = {() => this.setState({index: this.state.index + 1})}
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