import React from 'react';
import styles from './header.module.scss';


function FormattedDate(props) {
  return <h2>{props.date.toLocaleTimeString()}</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
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
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 style = {styles.h1}>Головоломка Энштейна</h1>
      <Clock />
    </div>
  )
}
