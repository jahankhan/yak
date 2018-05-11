import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageItem from './message_item';
import { selectAllMessages } from '../../reducers/selectors';
import { getAllMessages } from '../../actions/message_actions';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllMessages(this.props.match.params.channelId);
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
      <div className="message-list">
        {this.createListItems()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.entities.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllMessages: (messageId) => dispatch(getAllMessages(messageId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageList));
