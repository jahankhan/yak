import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getChannel } from '../../actions/channel_actions';
import { selectUserChannels } from '../../reducers/selectors';

class MessageNav extends React.Component {
  constructor(props) {
    super(props);
  }

  renderChannels() {
    if(typeof this.props.channels === 'undefined'){
      return '';
    } else {
      // debugger
      return this.props.channels.map(channel => {
        return <Link key={channel.id} to={`/channels/${channel.id}/messages`} className="channel-menu-item-link"><span key={channel.id} className="channel-menu-item"># {channel.title}</span></Link>;
      });
    }
  }

  renderUser() {
    if(typeof this.props.user === 'undefined') {
      return '';
    } else {
      return this.props.user.username;
    }
  }
  // componentDidMount() {
  //   // debugger
  //   // this.props.getChannel(this)
  // }
// {this.renderChannels()}
// <span className="channel-menu-item"># 2018-03-19-nyc</span>
// <span className="channel-menu-item"># general</span>
  render() {
    // debugger
    return (
      <nav className="message-navbar">
        <div className="user-menu">
          <div className="team-name">App Academy</div>
          <div className="username">{this.renderUser()}</div>
        </div>
        <div className="channel-col">
          <div className="channel-menu">
            <Link to="/channels" className="side-nav-header-link">
              <span className="side-nav-headers">Channels</span>
            </Link>
            {this.renderChannels()}

          </div>
          <div className="dm-menu">
            <span className="side-nav-headers">Direct Messages</span>
            <span className="dm-menu-item">slackbot</span>
            <span className="dm-menu-item">Jahan Khan</span>
            <span className="dm-menu-item">Guest User</span>
          </div>
        </div>
      </nav>

    );
  }
}
const mapStateToProps = (state, ownProps) => {
  // debugger
  const user = state.entities.users[state.session.id] || {};
  // debugger
  return {
    user,
    channels: selectUserChannels(state, user)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChannel: channelId => dispatch(getChannel(channelId))
  };
};

export default withRouter(connect(mapStateToProps)(MessageNav));
