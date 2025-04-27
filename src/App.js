import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  
  state = {
    timerIDs: []
  };

  
  componentDidMount() {
    this.handleAddTimer(); 
  }

  render() {
    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>

        <div className="TimerGrid">
          {this.renderTimers()}
        </div>
      </div>
    );
  }

  
  renderTimers = () =>
    this.state.timerIDs.map(id => {
      return <Timer key={id} id={id} removeTimer={this.removeTimer} />;
    });

  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random() * 1000)]
    }));
  };

  
  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }));
  };
}

export default App;
