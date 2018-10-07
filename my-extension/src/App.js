import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <input id="myinput" />
        <Question questionNumber="1" />
      </div>
    );
  }
}

export default App;
