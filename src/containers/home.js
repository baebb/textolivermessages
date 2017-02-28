import React from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

import {sendMessage} from '../actions/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: ''
    };
    
    this.validateMessage = this.validateMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  
  handleChange(e) {
    this.setState({message: e.target.value});
  }
  
  validateMessage(e) {
    e.preventDefault();
    console.log(this.state);
  }
  
  submitMessage(e) {
    e.preventDefault();
    sendMessage(this.state);
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-md-offset-3">
              <h1 className="header-text text-center">text oliver a sms message</h1>
              <form onSubmit={this.submitMessage}>
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
                  <FormControl.Feedback />
                </FormGroup>
                <Button
                  block
                  bsStyle="primary"
                  type="submit"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(Home);