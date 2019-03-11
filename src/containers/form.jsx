import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions & components
import { submitMessage } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitMessage(this.props.channelFromParams, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  }

  render() {
  // debugger
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          type="text"
          className="form-control"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

// <button type="submit">Send</button

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitMessage }, dispatch);
}

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
  };
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Form);
