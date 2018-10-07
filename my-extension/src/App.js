import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';
import questionData from './questions.json';
import { Message } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);  this.setWrapperRef = this.setWrapperRef.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }



componentDidMount() {
  document.addEventListener('mouseup', this.handleClickOutside);
}

componentWillUnmount() {
  document.removeEventListener('mouseup', this.handleClickOutside);
}
handleChange(event) {
  this.setState({value: event.target.value});
}
handleClickOutside(event) {
  console.log(event)
  var t = (document.all) ? document.selection.createRange().text : document.getSelection();
  console.log(t)
  this.setState({value: t.focusNode.data})
   // if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
   //   alert('You clicked outside of me!');
   // }
 }
  render() {
    return (
      <div className="App">
        <Message floating>
          You highlighted:
          {this.state.value}

          <input id="myinput"  type="hidden" name="highlightedText" value={this.state.value} onChange={this.handleChange} onchange={this.handleChange} />
        </Message>
        <Question questionData={questionData.questions} />
      </div>
    );
  }
}

export default App;
