import React from 'react';
import styles from './header.module.scss';

function FormattedTime(props) {
  const hour = Math.floor(props.time / 3600);
  const min = Math.floor((props.time % 3600) / 60);
  const sec = props.time % 60;
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }
  return <h3>{`Время: ${addZero(hour)}:${addZero(min)}:${addZero(sec)}`}</h3>;
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reset: props.reset,
      pause: props.pause,
      time: props.time,
      error: props.error,
    };
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time += 1
    });
    localStorage.setItem('time', this.state.time);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.pause !== prevProps.pause) {
      if (this.props.pause) {
        this.componentWillUnmount();
      } else {
      this.componentDidMount();
      }
    }
    if (this.props.reset !== prevProps.reset) {
      this.setState((state) => {
        return {time: 0}
      })
    }
    if (this.props.error !== prevProps.error) {
      this.setState((state) => {
        return {time: this.state.time += 30}
      })
    }

  }

  render() {
    return (
      <div>
        <FormattedTime time={this.state.time} />
      </div>
    );
  }
}

export default function Header(props) {
  return (
    <div className={styles.header}>
      <h2 style = {styles.h2}>Головоломка Эйнштейна</h2>
      <h3>{`Ошибки: ${props.error}`}</h3>
      <Timer time = {props.time} reset = {props.reset} pause = {props.pause} error = {props.error}/>
    </div>
  )
}
