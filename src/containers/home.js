import React from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl, ControlLabel, HelpBlock, ListGroup, ListGroupItem} from 'react-bootstrap';

import {sendMessage, getMessages} from '../actions/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: '',
      error: '',
      sent: false
    };
    
    this.validateMessage = this.validateMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  };
  
  componentDidMount() {
    this.props.dispatch(getMessages());
  }
  
  renderMessages(currentMessages, index) {
    let {IP, date, message} = currentMessages;
    // let cleanedDate = date.split(" ");
    return (
      <ListGroupItem
        key={index}
        header={message}
      >
        {date}
      </ListGroupItem>
    )
  }
  
  handleChange(e) {
    this.setState({...this.state, message: e.target.value});
  }
  
  validateMessage(e) {
    e.preventDefault();
    let message = this.state.message;
    if (message.length < 1) {
      this.setState({...this.state, error: 'Enter a message first you fucking idiot'});
    } else if (message.length > 70) {
      this.setState({...this.state, error: 'Your message must be less than 70 characters'});
    } else {
      this.setState({...this.state, error: ''});
      this.submitMessage();
    }
  }
  
  submitMessage() {
    this.setState({...this.state, sent: true});
    sendMessage(this.state);
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-md-offset-3">
              <h1 className="header-text text-center">text oliver an sms message</h1>
              {this.props.sentMessages &&
                <p className="text-center">Messages sent today: {this.props.sentMessages.length}</p>
              }
              <form onSubmit={this.validateMessage}>
                <FormGroup
                  controlId="sendMessage"
                >
                  <ControlLabel>Your message:</ControlLabel>
                  <FormControl
                    bsClass="form-control form-control-tall"
                    componentClass="textarea"
                    maxLength="70"
                    value={this.state.message}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                {this.state.error && <HelpBlock>{this.state.error}</HelpBlock>}
                {this.state.sent ?
                  <p className="text-success text-center bg-success success-block">
                    <strong>Your message was sent</strong>
                  </p>
                  :
                  <Button
                    block
                    bsStyle="danger"
                    type="submit"
                  >
                    Send
                  </Button>
                }
              </form>
              {this.props.sentMessages &&
              <div>
                <h2 className="text-center messages-header">messages sent to oliver:</h2>
                <ListGroup bsClass="list-group text-center messages-container">
                  {this.props.sentMessages.map(this.renderMessages)}
                </ListGroup>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sentMessages: state.messages.sentMessages
  }
}

export default connect(mapStateToProps, null)(Home);