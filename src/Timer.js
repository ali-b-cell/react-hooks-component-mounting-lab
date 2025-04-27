import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16)
  };

  // componentDidMount sets up the interval to call clockTick every second
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  // componentWillUnmount clears the interval to prevent memory leaks
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Updates the state every second
  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  // Stops the clock by clearing the interval
  stopClock = () => {
    clearInterval(this.interval);
  };

  // Removes this timer from the list in App.js
  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };

  render() {
    const { time, color } = this.state;
    return (
      <section className="Timer" style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }
}

export default Timer;
