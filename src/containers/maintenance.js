import React from 'react';
import {connect} from 'react-redux';

import {getMessages} from '../actions/index';

class Maintenance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMake: '',
      selectedModel: '',
      message: ''
    };
    
  }
  
  componentDidMount() {
    this.props.dispatch(getMessages());
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-md-offset-3">
              <h1 className="header-text text-center">shit's down come back tmrw</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(Maintenance);