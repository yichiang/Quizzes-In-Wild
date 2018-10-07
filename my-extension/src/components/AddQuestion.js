import React, {Component} from 'react';
import {Card, Button, Input} from 'semantic-ui-react';

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleOnClickAsk = this.handleOnClickAsk.bind(this);
    this.handleOnClickAnswer = this.handleOnClickAnswer.bind(this);
    this.handleOnClickInput = this.handleOnClickInput.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.state = {asking: false, value: ""};
  }

  handleOnClickAsk() {
    this.setState({asking: true});
  }

  handleOnClickAnswer() {
    alert("answer question i guess");
  }

  handleOnClickInput() {
    this.setState({asking: false});
    this.props.onAddQuestion({
      "name": this.state.value,
      "tags":["Big Bang Theory", "science"],
      "domains":[window.location.hostname],
      "answers":[],
      "choices":[],
      "votes": 0,
      "dismiss": 0
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <Card style={{"borderRadus" :0}} className="custom_card_addquestion">
        <Card.Content>
          <Card.Header>
        <div className="qitw_col">
          <div>Contribute</div>
        </div>
        </Card.Header>
        </Card.Content>
        <Card.Content extra>
          {this.state.asking ?
            <Input onChange={this.handleChange} action={<Button onClick={this.handleOnClickInput}>Add</Button>} placeholder='Type...' />
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
