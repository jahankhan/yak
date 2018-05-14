import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import MessageList from './message_list';
import MessageNav from './message_navbar';
import MessageChannelNav from './message_channel_navbar';
import MessageComposer from './message_composer';
import { getChannel } from '../../actions/channel_actions';
import { getUser } from '../../actions/session_actions';

class MessagePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      window.scrollTo(0,0);
      this.props.history.push('/login');
    });
  }

  componentDidMount() {
    // debugger
    //
    // debugger
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
    getUser: userId => dispatch(getUser(userId))
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessagePage));
