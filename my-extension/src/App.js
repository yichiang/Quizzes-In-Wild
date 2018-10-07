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

      this.state = {value: '', questions: foundQuestions, "domainQuestion": foundQuestions,"selectedKeywordQuestion": foundQuestions, "hardLevel": false};


      this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);  this.setWrapperRef = this.setWrapperRef.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
      this.handleAddQuestion = this.handleAddQuestion.bind(this);
      // this.handleDomain = this.handleDomain.bind(this);
      this.onDismissQuestion = this.onDismissQuestion.bind(this);
      // this.handleDomain();
      this.toggleLevel=this.toggleLevel.bind(this);
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
  // console.log(event)
  // var t = (document.all) ? document.selection.createRange().text : document.getSelection();
  // console.log(t)
  var text = window.getSelection().toString().trim();
  var questions = [...this.state.domainQuestion];
  questions = questions.filter(x => x.tags.filter( y=> y.indexOf(text.toLowerCase()) > -1).length > 0)
  this.setState({value: text, questions: questions, selectedKeywordQuestion:questions })
   // if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
   //   alert('You clicked outside of me!');
   // }
 }

 onDismissQuestion(index){
   // console.log(index)
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

toggleLevel(e, {value}) {
  console.log("toggleLevel", this.state.hardLevel);
  if(!this.state.hardLevel){
    var questions = [...this.state.selectedKeywordQuestion];
    questions = questions.filter(x => x.level > 1)
  }else{
    questions = [...this.state.selectedKeywordQuestion];
  }
  this.setState({"hardLevel":!this.state.hardLevel, questions: questions});
  // console.log(e, value)
  // console.log(this.props.question)
}
  render() {
    return (
      <div className="custom_react_App">
          <div className="custom_header_panel">
            <div className="top_custom_bar">
              <Icon name='angle left'/>
            <Button basic className='custom_save_pdf' content='Violet'>
              <Icon name='file pdf'/>
              Save View PDF
            </Button>
            </div>
            <svg
              className="custom_logo"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 529.47 243.39"><defs>

              <mask id="mask" x="0" y="0" width="233.28" height="173.64" maskUnits="userSpaceOnUse"><g id="mask-2"><polygon id="path-1" class="logo-cls-1" points="0 0 233.28 0 233.28 173.64 0 173.64 0 0"/></g></mask></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id="Fill-1" class="logo-cls-2" d="M117.14,32.55A105.42,105.42,0,1,0,222.45,138,105.37,105.37,0,0,0,117.14,32.55m0,22A83.42,83.42,0,1,1,33.81,138a83.46,83.46,0,0,1,83.33-83.41"/><g id="Group-5"><g class="logo-cls-4"><path id="Fill-3" class="logo-cls-1" d="M224.33,1.74A16.73,16.73,0,0,0,217,0a15.41,15.41,0,0,0-12.49,6.29c-2,2-23.93,22.16-87.69,22.69-64-.53-86-20.69-88-22.69A15.41,15.41,0,0,0,16.33,0,16.77,16.77,0,0,0,9,1.74C1.85,5.19-1.49,13.65.63,21.3A69.82,69.82,0,0,0,8.87,38.72a16.45,16.45,0,0,0-.61,5.53C9.55,64.17,19.82,81.84,21,83.79a16.57,16.57,0,0,0,2.44,3.12,49.39,49.39,0,0,0,47.78,60.94,48.57,48.57,0,0,0,17.22-3.19c4.66,11,12.66,23.08,21.56,27.37l-.06.13a16.56,16.56,0,0,0,4.7,1.34,13.5,13.5,0,0,0,1.9.14h.22a13.5,13.5,0,0,0,1.9-.14,16.87,16.87,0,0,0,4.7-1.33l-.06-.14c8.89-4.29,16.91-16.4,21.56-27.37a48.59,48.59,0,0,0,17.23,3.19c27.09,0,49.14-22.21,49.14-49.52a49.53,49.53,0,0,0-1.37-11.43,16.19,16.19,0,0,0,2.44-3.11c1.16-2,11.44-19.62,12.73-39.54a16.48,16.48,0,0,0-.61-5.53,69.64,69.64,0,0,0,8.24-17.42c2.12-7.65-1.22-16.1-8.32-19.56"/></g></g><path id="Fill-6" class="logo-cls-2" d="M73.36,121.88A25.37,25.37,0,1,1,98.7,96.52a25.36,25.36,0,0,1-25.34,25.36m0-58.53a33.17,33.17,0,1,0,33.13,33.17A33.15,33.15,0,0,0,73.36,63.35"/><path id="Fill-8" class="logo-cls-2" d="M23.66,44.4S37,59.22,54.43,61.24c0,0-14.24,4.31-20.06,14,0,0-9.61-15-10.71-30.8"/><path id="Fill-10" class="logo-cls-2" d="M138,96.52a25.34,25.34,0,1,1,25.33,25.36A25.35,25.35,0,0,1,138,96.52m-7.8,0a33.14,33.14,0,1,0,33.13-33.17,33.15,33.15,0,0,0-33.13,33.17"/><path id="Fill-12" class="logo-cls-2" d="M117.14,44.38C39.27,43.74,16.56,16,16.56,16s10.36,37.2,55,40.27c45.94,3.16,42.4,52.5,42.4,52.5s-13,3.16-13,18.56c0,9.89,14.51,29.17,16.17,28.42,1.66.75,16.17-18.53,16.17-28.42,0-15.4-13-18.56-13-18.56s-3.54-49.34,42.4-52.5c44.66-3.07,55-40.27,55-40.27S195,43.74,117.14,44.38"/><path id="Fill-16" class="logo-cls-2" d="M70.45,89a8.06,8.06,0,0,1,1.24-4.29c-.23,0-.46,0-.7,0A11.85,11.85,0,1,0,82.83,96.52c0-.24,0-.47,0-.7A8.06,8.06,0,0,1,70.45,89"/><path id="Fill-18" class="logo-cls-2" d="M163.29,89a8,8,0,0,1,1.22-4.26c-.4,0-.81-.06-1.22-.06a11.85,11.85,0,1,0,11.83,11.85c0-.14,0-.26,0-.4A8.05,8.05,0,0,1,163.29,89"/><path id="Fill-21" class="logo-cls-2" d="M75.73,159.06a5.92,5.92,0,1,1-11.84,0c0-3.41,2.65-12.8,5.92-12.8s5.92,9.39,5.92,12.8"/><path id="Fill-22" class="logo-cls-2" d="M106.49,175.63a5.92,5.92,0,1,1-11.83,0c0-3.4,2.64-12.78,5.92-12.78s5.91,9.38,5.91,12.78"/><path id="Fill-23" class="logo-cls-2" d="M123.06,204.06a5.92,5.92,0,1,1-11.84,0c0-3.4,2.65-12.79,5.92-12.79s5.92,9.39,5.92,12.79"/><path id="Fill-25" class="logo-cls-2" d="M127.79,175.63a5.92,5.92,0,1,0,11.83,0c0-3.4-2.64-12.78-5.91-12.78s-5.92,9.38-5.92,12.78"/><path id="Fill-26" class="logo-cls-2" d="M146.72,192.22a5.92,5.92,0,1,0,11.83,0c0-3.41-2.64-12.79-5.91-12.79s-5.92,9.38-5.92,12.79"/><path id="Fill-27" class="logo-cls-2" d="M87.56,192.22a5.92,5.92,0,1,1-11.83,0c0-3.41,2.64-12.79,5.91-12.79s5.92,9.38,5.92,12.79"/><path id="Fill-14" class="logo-cls-2" d="M211,44.39s-13.39,14.92-31,17c0,0,14.35,4.34,20.21,14,0,0,9.68-15.09,10.79-31"/><path id="Fill-24" class="logo-cls-2" d="M159,159.21a6,6,0,1,0,12,0c0-3.41-2.68-12.82-6-12.82s-6,9.41-6,12.82"/><g class="logo-cls-5"><path class="logo-cls-2" d="M277,237.39,239,94.23h19.43l21.78,93.84q3.53,14.75,6.06,29.3,5.46-23,6.44-26.46L320,94.23h22.85l20.51,72.46a384.65,384.65,0,0,1,11.13,50.68q2.73-13.58,7.13-31.15l22.46-92h19L383.86,237.39H365.6L335.43,128.31q-3.81-13.68-4.5-16.8-2.24,9.87-4.19,16.8L296.37,237.39Z"/><path class="logo-cls-2" d="M440,237.39V94.23H459V220.49h70.51v16.9Z"/></g></g></g></svg>
            {/* <img  src={mainLogo}className="custom_brandName" alt="fireSpot"/> */}

          </div>
            <Divider section />

            <div className="custom_panel">
              <p className="choose-your-level-to">Choose your level to start taking quizzes:</p>
              <div className="custom_toogle_group">
                <span className="custom_radio_toogle_label">Beginner</span>
                <Radio toggle className="custom_radio_toogle" onClick={this.toggleLevel} value={this.state.hardLevel}/>
                <span className="custom_radio_toogle_label">Advanced</span></div>
            </div>

              <div className="custom_question_text_hi">
                <p className="we-found-questi">
                  <Icon name='lightbulb outline' color='red'/>
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
