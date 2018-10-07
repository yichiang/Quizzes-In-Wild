import React, {Component} from 'react';
// import {Container, List, Button} from 'semantic-ui-react';
import { Button, Card, Image, Icon, Form, Radio } from 'semantic-ui-react'

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
      <div className="qitw_col">
        <div className="what-the-differen">{this.props.question.name}</div>
        <Icon disabled name='times' onClick={() => this.props.onDismissQuestion(this.props.questionIndex)}/>

      </div>
     </Card.Header>
       <Card.Meta className="qitw_tag_parent">
         {this.props.question.tags.map(x=> <span className="qitw_tag">{x}</span>)}

       </Card.Meta>
       <Card.Description>
        <Form>
          <Form.Field>
          {
            this.props.question.choices.map((x,i) =>
              <Radio
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
       <div className='ui two buttons'>
         <Button basic color='green'>
           Submit
         </Button>
         <Button basic color='red'>
           Skip
         </Button>
       </div>
     </Card.Content>
   </Card>



    );
  }
};

export default QuestionCard;
