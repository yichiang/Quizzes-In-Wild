import React, {Component} from 'react';
// import {Container, List, Button} from 'semantic-ui-react';
import { Button, Card, Image, Icon } from 'semantic-ui-react'

class QuestionCard extends Component {
  render() {
    return (
   <Card>
     <Card.Content>
       <Card.Header>
      <div className="qitw_col">
        <div>{this.props.question.name}</div>
        <Icon disabled name='times' />

      </div>
     </Card.Header>
       <Card.Meta>kubernetes</Card.Meta>
       <Card.Description>
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
