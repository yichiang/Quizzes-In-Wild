import React, {Component} from 'react';
// import {Container, List, Button} from 'semantic-ui-react';
import { Button, Card, Image, Icon, Form, Radio, Divider } from 'semantic-ui-react'

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, {value}) {
    this.setState({value});
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
              <span>{this.props.question.votes || 0} Upvotes</span>
              <Icon name='thumbs up' />
            </span>
            <span className='custom_downvotes'>
              <span>{this.props.question.downvotes || 0} Downvotes</span>
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
                value={x}
                checked={this.state.value === x}
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
         <p className='custom_check_your_anser'>
           Check your answer
         </p>
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
