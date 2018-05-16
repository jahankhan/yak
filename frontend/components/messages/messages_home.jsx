import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import MessageList from './message_list';
import MessageNav from './message_navbar';
import MessageChannelNav from './message_channel_navbar';
import MessageComposer from './message_composer';
import { getChannel, setActiveChannel } from '../../actions/channel_actions';
import { getUser } from '../../actions/session_actions';
import { receiveMessage } from '../../actions/message_actions';

class MessagePage extends React.Component {
  constructor(props) {
    super(props);
    // this.componentWillMount = this.componentWillMount.bind(this);
    // App.cable.subscriptions.create = App.cable.subscriptions.create.bind(this);
  }



  componentWillMount() {
    // debugger
    const that = this;
    if (typeof App !== 'undefined'){
      // debugger
      App.room = App.cable.subscriptions.create("RoomChannel", {
          connected: function() {},
          disconnected: function() {},
          received: function(data) {
            // debugger
            that.props.receiveMessage(JSON.parse(data['message']));
            const messageListDiv = document.getElementById("message-list");
            messageListDiv.scrollTop = messageListDiv.scrollHeight;
          },
          speak: function(message) {
            // debugger
            return this.perform('speak', {
              message: message
            });
          }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      this.props.setActiveChannel(this.props.user.id, nextProps.match.params.channelId).then((data) => {
        // debugger
        this.props.getUser(this.props.user.id).then(() => {
          const keys = Object.keys(data.currentChannel);
          const currentChannel = keys[keys.length-1];
          // debugger
          // this.props.setActiveChannel(this.props.user.id, currentChannel);
          this.props.getChannel(currentChannel);
        });

      });
    }
  }

  render() {
    return (
      <main className="messages-main">
        <MessageNav />
        <div className="messages-content-container">
          <MessageChannelNav />
          <MessageList />
          <MessageComposer />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[state.session.id] || {};
  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    getChannel: channelId => dispatch(getChannel(channelId)),
    setActiveChannel: (userId, channelId) => dispatch(setActiveChannel(userId, channelId)),
    getUser: userId => dispatch(getUser(userId)),
    receiveMessage: message => dispatch(receiveMessage(message))
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessagePage));
