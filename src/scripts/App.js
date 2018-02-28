import React, { Component } from 'react';
import logo from '../assets/sprintie.png';
import '../styles/App.css';
import Wrapper from './components/Wrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sprintie!</h1>
        </header>
        <Wrapper />
      </div>
    );
  }
}

export default App;
