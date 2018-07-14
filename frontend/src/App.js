import React, { Component } from 'react';
import './App.css';
import Shows from './Shows'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Silicon Valley shows</h1>
        </header>

        <Shows />
      </div>
    );
  }
}

export default App;
