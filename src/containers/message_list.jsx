import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { setCities } from '../actions';
import Message from '../components/message';


class MessageList extends Component {
  render() {
    const initialState = {
      messages: [
        {
          author: "anonymous92",
          content: "Hello world!",
          created_at: "2017-09-26T23:03:16.365Z"
        },
        {
          author: "anonymous77",
          content: "My name is anonymous77",
          created_at: "2017-09-26T23:03:21.194Z"
        }
      ],
    }
    debugger
    initialState.messages.map((message) => {
      return (
        <Message />
      )
    });
    // return(
    //   <Message />
    // );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators (
    { messages: ["hello", "HELLO"] },
    dispatch
  );
};

function mapReduxStateToProps(reduxState) {
  return {
    messages: reduxState.messages
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);
