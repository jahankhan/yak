import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MessageChannelNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleTopicChange = this.handleTopicChange.bind(this);
  }

  handleTopicChange() {
    //come back to later
  }

  renderDmTitle(arr) {
    if (typeof arr === 'undefined'){
      return '';
    }
    return arr.map(id => this.props.users[id].username).join(', ');
  }

  renderChannel() {
    if (typeof this.props.channel === 'undefined') {
      return '';
    } else if(this.props.channel.dm === false) {
      return `#${this.props.channel.title}`;
    } else {
      return this.renderDmTitle(this.props.channel.userIds);
    }
  }

  renderTopic() {
    if (typeof this.props.channel === 'undefined') {
      return '';
    } else if (this.props.channel.topic === '') {
      // return 'Add a topic';
      // return <button onClick={this.handleTopicChange}>Add a topic</button>;
      return '';
    } else {
      return this.props.channel.topic;
    }
  }

  render() {

    return (
      <header className="message-channel-navbar">
        <div className="message-channel-navbar-left">
          <button className="channel-navbar-btn">{this.renderChannel()}</button>
          <div className="channel-navbar-small-btns">
            <span className="channel-small-items">{this.renderTopic()}</span>
          </div>
        </div>
        <div className="message-channel-navbar-right">

        </div>
      </header>

    );
  }
  // <div className="search-container">
  //   <input type="text" placeholder="Search"></input>
  // </div>

}
const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    users: state.entities.users
  };
};


export default withRouter(connect(mapStateToProps)(MessageChannelNav));
