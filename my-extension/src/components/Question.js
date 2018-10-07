import React, {Component} from 'react';
// import {Container, List, Button} from 'semantic-ui-react';
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import QuestionCard from './QuestionCard';

class Question extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Card.Group>
          {
            this.props.questionData.map((x,i) =><QuestionCard question={x} questionIndex={i} onDismissQuestion={this.props.onDismissQuestion}/>)
          }
        </Card.Group>
        <Button className="answer-more-similar">
          Answer more similar questions
        </Button>
      </div>

    );
  }
};

export default Question;
