import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';
import questionData from './questions.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <input id="myinput" />
        <Question questionData={questionData.questions} />
      </div>
    );
  }
}

export default App;
