import React, {Component} from 'react';
import {Card, Button, Input} from 'semantic-ui-react';

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleOnClickAsk = this.handleOnClickAsk.bind(this);
    this.handleOnClickAnswer = this.handleOnClickAnswer.bind(this);
    this.handleOnClickInput = this.handleOnClickInput.bind(this);

    this.state = {asking: false};
  }

  handleOnClickAsk() {
    this.setState({asking: true});
  }

  handleOnClickAnswer() {
    alert("answer question i guess");
  }

  handleOnClickInput() {
    this.setState({asking: false});
    this.props.onAddQuestion();
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
        <div className="qitw_col">
          <div>Contribute</div>
        </div>
        </Card.Header>
        </Card.Content>
        <Card.Content extra>
          {this.state.asking ?
            <Input action={<Button onClick={this.handleOnClickInput}>Add</Button>} placeholder='Type...' />
            :
            <Button basic color='green' onClick={this.handleOnClickAsk}>
              Add a Question
            </Button>
          }
          <Button basic color='blue' onClick={this.handleOnClickAnswer}>
            Answer a Question
          </Button>
        </Card.Content>
    </Card>
 
    );
  }
};

export default AddQuestion;
