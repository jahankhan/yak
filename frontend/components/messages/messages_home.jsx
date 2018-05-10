import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MessageList from './message_list';
import { getChannel } from '../../actions/channel_actions';

class MessagePage extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      window.scrollTo(0,0);
      this.props.history.push('/login');
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      window.scrollTo(0,0);
      this.props.history.push('/login');
    });
  }

  componentDidMount() {
    this.props.getChannel(this.props.match.params.channelId);
  }

  render(){
    debugger
    let channelTitle;
    if(typeof this.props.channel === 'undefined') {
      // debugger
      channelTitle = '';

    } else {
      // debugger
      channelTitle = this.props.channel.title;
    }
    return (
      <main>
        <MessageList />
          <form onSubmit={this.handleSubmit} className="logout-form">
            <input className="message-form-input" type="text" placeholder={`Message #${channelTitle}`}></input>
          </form>
        <form onSubmit={this.handleLogout} className="logout-form">
          <input className="logout-btn" type="submit" value="Sign out"></input>
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // debugger
  const channelId = ownProps.match.params.channelId;
  return {
    channel: state.entities.channels[channelId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChannel: channelId => dispatch(getChannel(channelId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagePage);
