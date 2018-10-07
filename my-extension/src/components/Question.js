import React, {Component} from 'react';
import {Container, List, Button} from 'semantic-ui-react';

class Question extends Component {
  render() {
    return (
      <Container>
        <h2>
          {this.props.questionNumber} What is the worst fruit in a fruit cup?
        </h2>
        <List>
          <List.Item><Button>Canteloupe</Button></List.Item>
          <List.Item><Button>Watermelon</Button></List.Item>
          <List.Item><Button>Orange</Button></List.Item>
          <List.Item><Button>Raspberry</Button></List.Item>
        </List>
      </Container>
    );
  }
};

export default Question;
