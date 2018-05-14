import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MessageChannelNav extends React.Component {
  constructor(props) {
    super(props);
  }

  renderChannel() {
    if (typeof this.props.channel === 'undefined') {
      return '';
    } else {
      return `${this.props.channel.title}`;
    }
  }

  render() {
    // debugger
    return (
      <header className="message-channel-navbar">
        <div className="message-channel-navbar-left">
          <button className="channel-navbar-btn">#{this.renderChannel()}</button>
          <div className="channel-navbar-small-btns">
            <span className="channel-small-items">s</span>
            <span className="channel-small-items">numU</span>
            <span className="channel-small-items">pin</span>
            <span className="channel-small-items">Add a topic</span>
          </div>
        </div>
        <div className="message-channel-navbar-right">
          <div className="search-container">
            <input type="text" placeholder="Search"></input>
          </div>
        </div>
      </header>

    );
  }
}
const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    channel: state.entities.channels[ownProps.match.params.channelId]
  };
};
//
// const mapDispatchToProps = dispatch => {
//   return {
//     addUserToMessage: messageId => dispatch(addUserToMessage(messageId))
//   };
// };

export default withRouter(connect(mapStateToProps)(MessageChannelNav));
