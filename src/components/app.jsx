import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';
import Form from '../containers/form';

const App = (props) => {
  return (
    <div className="app">
      <div className="channel-wrapper">
        <ChannelList channelFromParams={props.match.params.channel} />
      </div>
      <div className="messages-wrapper">
        <div className="messages-list">
          <MessageList channelFromParams={props.match.params.channel} />
        </div>
        <div className="form">
          <Form channelFromParams={props.match.params.channel} />
        </div>
      </div>
    </div>
  );
};

export default App;
