import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your Current Weather</h1>
        </header>
        <p className="App-intro">
          To get started, click on the icon...
        </p>
        <div className="container">
          <h1>Test</h1>
          <button className="btn btn-danger">Danger</button>
        </div>
      </div>
    );
  }
}

export default App;
