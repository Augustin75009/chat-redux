import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions & components
import { fetchMessages } from '../actions';
import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.channelFromParams);
  }
  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }
  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
    console.log(this.list.scrollTop);
  }
  componentWillUnmount() {
    clearInterval(this.refresher);
  }
  render() {
    return (
      <div className="channel-content" ref={(list) => { this.list = list; }}>
        {this.props.messages.map((message) => {
          return (
            <Message message={message} key={message.created_at} />
          );
        })}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

function mapStateToProps(reduxState) {
  console.log(reduxState)
  return {
    messages: reduxState.messages
  };
}

export default connect(mapStateToProps,
  mapDispatchToProps)(MessageList);
