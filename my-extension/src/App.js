import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';
import questionData from './questions.json';
import AddQuestion from './components/AddQuestion';
import { Message } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
      super(props);
      var hostname = window.location.hostname;
      console.log(hostname)
      hostname = hostname === "localhost" ? "kubernetes.io": hostname;

      var foundQuestions = questionData.questions.filter(x=> x.domains.indexOf(hostname.toLowerCase())> -1 );

      this.state = {value: '', questions: foundQuestions, "domainQuestion": foundQuestions};


      this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);  this.setWrapperRef = this.setWrapperRef.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
      this.handleAddQuestion = this.handleAddQuestion.bind(this);
      // this.handleDomain = this.handleDomain.bind(this);
      this.onDismissQuestion = this.onDismissQuestion.bind(this);
      // this.handleDomain();
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
  var text = window.getSelection().toString();
  var questions = [...this.state.domainQuestion];
  questions = questions.filter(x => x.tags.filter( y=> y.indexOf(text.toLowerCase()) > -1).length > 0)
  this.setState({value: text, questions: questions})
   // if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
   //   alert('You clicked outside of me!');
   // }
 }

 onDismissQuestion(index){
   console.log(index)
    var questions = [...this.state.questions];
    questions.splice(index, 1);

   this.setState({questions: questions})
   // var hostname = window.location.hostname
   // console.log(hostname);
   // console.log(this)
   // console.log("handleDomain", this.state.questions.filter(x=> x.domains.indexOf(hostname.toLowerCase())> -1 ))
   // var foundQuestions = this.state.questions.filter(x=> x.domains.indexOf(hostname.toLowerCase())> -1 );
   // console.log("foundQuestions", foundQuestions)
   //
   // this.setState({questions: foundQuestions})

 }
 handleAddQuestion(newQuestion) {
  this.setState({
    questions: [
      newQuestion,
      ...this.state.questions
    ]
  });
 }

  render() {
    return (
      <div className="App">

            {this.state.value&&
              <Message floating>
                  You highlighted:  {this.state.value}

               <input id="myinput"  type="hidden" name="highlightedText" value={this.state.value} onChange={this.handleChange}/>
             </Message>
           }



        <Question questionData={this.state.questions} onDismissQuestion={this.onDismissQuestion}/>
        <AddQuestion onAddQuestion={this.handleAddQuestion}/>
      </div>
    );
  }
}

export default App;
