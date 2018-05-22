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
import AuthRoute from '../../util/route_util';

class MessagePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    const that = this;
    if (typeof App !== 'undefined'){
      App.room = App.cable.subscriptions.create("RoomChannel", {
          connected: function() {},
          disconnected: function() {},
          received: function(data) {

            that.props.receiveMessage(JSON.parse(data['message']));
            const messageListDiv = document.getElementById("message-list");
            messageListDiv.scrollTop = messageListDiv.scrollHeight;
            return;
          },
          speak: function(message) {

            return this.perform('speak', {
              message: message
            });
          }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      if (this.props.currentUser.id !== this.props.user.id) {
        this.props.history.push('/login');
      }
      this.props.setActiveChannel(this.props.user.id, nextProps.match.params.channelId).then((data) => {
        this.props.getUser(this.props.user.id).then(() => {
          const keys = Object.keys(data.currentChannel);
          const currentChannel = keys[keys.length-1];
        });
      });
    }
  }

  render() {

    if (typeof this.props.errors !== 'undefined' && typeof this.props.errors.channels !== 'undefined' && typeof this.props.errors.channels.errors !== 'undefined') {
      if(this.props.errors.channels.errors.length > 0){
        this.props.history.push('/');
      }
    }
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
    user,
    currentUser: state.session,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {

  return {
    getChannel: channelId => dispatch(getChannel(channelId)),
    setActiveChannel: (userId, channelId) => dispatch(setActiveChannel(userId, channelId)),
    getUser: userId => dispatch(getUser(userId)),
    receiveMessage: message => dispatch(receiveMessage(message))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessagePage));
