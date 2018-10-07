import React, {Component} from 'react';
import {Container, Button} from 'semantic-ui-react';

class AddQuestion extends Component {
  handleOnClick() {
    this.props.removeNotification(this.props.id);
  }
  
  render(props) {
    return (
      <Container>
        <Button onClick={this.handleOnClick}>Ask a Question</Button>
      </Container>
    );
  }
};

export default AddQuestion;
