import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';
import questionData from './questions.json';
import AddQuestion from './components/AddQuestion';
import { Message, Radio, Button, Divider, Icon } from 'semantic-ui-react'
// import mainLogo from'./logo.png';

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
      <div className="custom_react_App">
          <div className="custom_header_panel">
            <div>
              <Icon name='angle left'/>
            <Button basic color='violet' content='Violet'>Save View PDF</Button></div>
            <p className="custom_brandName">Quizzes in the Wild</p>
            {/* <img  src={mainLogo}className="custom_brandName" alt="fireSpot"/> */}

          </div>
            <Divider section />

            <div className="custom_panel">
              <p className="choose-your-level-to">Choose your level to start taking quizzes:</p>
              <div className="custom_toogle_group">
                <span className="custom_radio_toogle_label">Beginner</span>
              <Radio toggle className="custom_radio_toogle"/>
              <span className="custom_radio_toogle_label">Advanced</span></div>
            </div>

              <div className="custom_question_text_hi">
                <Icon name='lightbulb outline' color='red'/>
                <p className="we-found-questi">
                    We found
                    <span className="custom_number_text"> {this.state.questions.length || 0} </span>
                   questions about  <span className='custom_hightlengthed_text'>{this.state.value ||  (window.location.hostname.length > 10 ? 'this site': window.location.hostname)}</span> for your answer</p>
              </div>
            {/* {this.state.value&&
              <Message floating>
                  You highlighted:  {this.state.value}

               <input id="myinput"  type="hidden" name="highlightedText" value={this.state.value} onChange={this.handleChange}/>
             </Message>
           } */}



        <Question questionData={this.state.questions} onDismissQuestion={this.onDismissQuestion}/>
        <AddQuestion onAddQuestion={this.handleAddQuestion}/>
      </div>
    );
  }
}

export default App;
