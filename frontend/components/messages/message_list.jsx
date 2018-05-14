import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageItem from './message_item';
import { getChannel } from '../../actions/channel_actions';
import { selectAllMessages } from '../../reducers/selectors';
import { getAllMessages } from '../../actions/message_actions';
import { getUser } from '../../actions/session_actions';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    // this.props.getChannel(this.props.match.params.channelId);
    this.props.getUser(this.props.user.id).then(() => {
      this.props.getChannel(this.props.match.params.channelId).then(() => {
        this.props.getAllMessages(this.props.match.params.channelId);
      });
    });


  }

  createListItems() {
    // if(typeof this.props.messages === 'undefined'){
    //   return [];
    // }
    return (
      Object.keys(this.props.messages).map((messageId) => {
        // debugger
        return <MessageItem key={messageId} message={this.props.messages[messageId]} />;
      })
    );
  }

  render() {
    return (
      <div className="message-list">
        {this.createListItems()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // let messages;
  // if(Object.keys(state.entities.messages).length === 0) {
  //   messages = {};
  // } else {
  //   messages = state.entities.messages;
  // }
  const user = state.entities.users[state.session.id] || {};
  return {
    messages: state.entities.messages,
    user
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
