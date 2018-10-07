import React, {Component} from 'react';
// import {Container, List, Button} from 'semantic-ui-react';
import { Button, Card, Image, Icon, Form, Radio, Divider } from 'semantic-ui-react'

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {"value": "", "checked": false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
  }

  handleChange(e, {value}) {
    this.setState({value});
    // console.log(e, value)
    // console.log(this.props.question)
  }
  handleSubmit(){
    // if(this.props.question.correctChoice == this.state.value){
    //
    // }
    console.log(this.props.question.correctChoice)
    console.log(this.state.value)

    this.setState({"checked": true});

  }

  handleSubmitAnswer(){
    this.setState({"checked": true});

  }
  render() {
    return (
   <Card style={{"borderRadus" :0}}>
     <Card.Content>

       <Card.Header>
         <div>
        <div className="qitw_col">
          <div>
            <span className='custom_upvotes'>
              <span className='custom_strong'>{this.props.question.votes || 0} Upvotes</span>
              <Icon name='thumbs up' />
            </span>
            <span className='custom_downvotes'>
              <span className='custom_strong'>{this.props.question.downvotes || 0} Downvotes</span>
              <Icon name='thumbs down' />
            </span>
          </div>
          <div className="posted-on-date">
            Posted on Oct 6, 2016
          </div>
          <Icon name='times' disabled onClick={() => this.props.onDismissQuestion(this.props.questionIndex)}/>

        </div>
      </div>
       <Divider />
      <div className="qitw_col">
        <div className="what-the-differen">{this.props.question.name}</div>
        <span className="posted-on-date">{this.props.question.level&&this.props.question.level > 1 ?
          <span className="custom_level_label custom_level_label_hard">Hard</span>
          :
          <span className="custom_level_label custom_level_label_easy">Easy</span>
        }</span>
      </div>

     </Card.Header>

       <Card.Description>
        <Form>
          <Form.Field>
          {
            this.props.question.choices.map((x,i) =>
              <Radio
                className='custom_options_radio'
                label={x}
                name='radioGroup'
                value={i}
                checked={this.state.value === i}
                onChange={this.handleChange}
              />
            )
          }
          </Form.Field>
        </Form>
       </Card.Description>
     </Card.Content>

     <Card.Content extra>
       <div>
         {this.state.checked&&this.props.question.correctChoice != null &&
          <div>
            {( this.props.question.correctChoice - 1  === this.state.value )?
            <p className='custom_check_your_anser customer_correct_answer'>
                <Icon name='check'/>Correct
              </p>
            : <p className='custom_check_your_anser customer_incorrect_answer'>
                  <Icon name='times'/>Incorrect
                </p>
              }
          </div>
        }

        {this.state.checked&&(this.props.question.correctChoice == null ||  ( this.props.question.correctChoice - 1  === this.state.value ))&&
         <div>
          {this.props.question.answers.map(x=> <p>{x}</p>)}
         </div>
       }

        {!this.state.checked&&this.props.question.correctChoice != null&& <p className='custom_check_your_anser' onClick={this.handleSubmit}>
              Check your answer
            </p>
         }


         {!this.state.checked&&this.props.question.correctChoice == null&& <p className='custom_check_your_anser' onClick={this.handleSubmitAnswer}>
               View answer
             </p>
          }

         {/* <Button basic color='red'>
           Skip
         </Button> */}
         {this.props.question.source &&
           <span className="custom_source_text">Source: {this.props.question.source}</span>
         }
       </div>
       <div className="qitw_tag_parent">
         {this.props.question.tags.map(x=> <span className="qitw_tag">{x}</span>)}

       </div>
     </Card.Content>
   </Card>



    );
  }
};

export default QuestionCard;
