import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageItem from './message_item';
import { getChannel } from '../../actions/channel_actions';
import {
  selectAllMessages,
  selectChannelMessages
  } from '../../reducers/selectors';
import { getAllMessages } from '../../actions/message_actions';
import { getUser } from '../../actions/session_actions';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    // this.props.getChannel(this.props.match.params.channelId);
    this.props.getUser(this.props.user.id).then(() => {
      this.props.getChannel(this.props.match.params.channelId).then(() => {
        this.props.getAllMessages(this.props.match.params.channelId).then(() => {
          const messageListDiv = document.getElementById("message-list");
          messageListDiv.scrollTop = messageListDiv.scrollHeight;
        });
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      this.props.getChannel(nextProps.match.params.channelId).then(() => {
        this.props.getAllMessages(nextProps.match.params.channelId).then(() => {
          const messageListDiv = document.getElementById("message-list");
          messageListDiv.scrollTop = messageListDiv.scrollHeight;
        });
      });
    }

    // const messageListDiv = document.getElementById("message-list");
    // messageListDiv.scrollTop = messageListDiv.scrollHeight;
  }

  createListItems() {
    return (
      Object.keys(this.props.messages).map((messageId) => {
        return <MessageItem key={messageId} message={this.props.messages[messageId]} />;
      })
    );
  }

  render() {
    return (
      <div className="message-list" id="message-list">
        {this.createListItems()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[state.session.id] || {};
  return {
    messages: selectChannelMessages(state, ownProps.match.params.channelId),
    user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: userId => dispatch(getUser(userId)),
    getChannel: channelId => dispatch(getChannel(channelId)),
    getAllMessages: channelId => dispatch(getAllMessages(channelId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageList));
