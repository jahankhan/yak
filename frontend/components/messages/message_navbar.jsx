import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { getChannel } from '../../actions/channel_actions';
import { selectUserChannels, selectUserDMs } from '../../reducers/selectors';

class MessageNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      window.scrollTo(0,0);
      this.props.history.push('/login');
    });
  }

  renderChannels() {
    if(typeof this.props.channels === 'undefined' || typeof this.props.channels === 'undefined'){
      return '';
    } else {
      // debugger
      return this.props.channels.map(channel => {
        if(typeof channel === 'undefined') return;
        return <NavLink key={channel.id} to={`/channels/${channel.id}/messages`} activeClassName="selected" className="channel-menu-item-link"><span key={channel.id} className="channel-menu-item"># {channel.title}</span></NavLink>;
      });
    }
  }

  renderDmTitle(arr) {
    return arr.map(id => this.props.users[id].username).join(', ');
  }

  renderDMs() {
    if(typeof this.props.dms === 'undefined'){
      return '';
    } else {
      // debugger
      return this.props.dms.map(dm => {
        if(typeof dm === 'undefined') return;
        if (typeof dm.userIds === 'undefined') return '';
        return <NavLink key={dm.id} to={`/channels/${dm.id}/messages`} activeClassName="selected" className="channel-menu-item-link"><span key={dm.id} className="channel-menu-item"> {this.renderDmTitle(dm.userIds)}</span></NavLink>;
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

  toggleModal() {
    console.log("click");
    const modal = document.getElementById('logout-modal');
    if (this.state.modalOpen === false) {
      this.setState({modalOpen: true}, () => {
        modal.style.display = 'block';
      });
    } else {
      this.setState({modalOpen: false}, () => {
        modal.style.display = 'none';
      });
    }
  }

  // componentDidMount() {
  //   // debugger
  //   // this.props.getChannel(this)
  // }
// {this.renderChannels()}
// <span className="channel-menu-item"># 2018-03-19-nyc</span>
// <span className="channel-menu-item"># general</span>
// <span className="dm-menu-item">slackbot</span>
// <span className="dm-menu-item">Jahan Khan</span>
// <span className="dm-menu-item">Guest User</span>
  render() {
    // debugger
    return (
      <nav className="message-navbar">
        <div className="user-menu" onClick={this.toggleModal}>
          <div className="team-name">App Academy</div>
          <div className="username">{this.renderUser()}</div>
          <div className="logout-modal" id="logout-modal">
            <section className="modal-content">
              <div className="modal-user-info">
                Icon
                Jahan Khan
              </div>
              <button onClick={this.handleLogout}>Sign Out</button>
            </section>
          </div>
        </div>
        <div className="channel-col">
          <div className="channel-menu">
            <Link to="/channels" className="side-nav-header-link">
              <span className="side-nav-headers">Channels</span>
            </Link>
            {this.renderChannels()}

          </div>
          <div className="dm-menu">
            <Link to="/channels/new" className="side-nav-header-link">
              <span className="side-nav-headers">Direct Messages</span>
            </Link>
            {this.renderDMs()}
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
    channels: selectUserChannels(state, user),
    dms: selectUserDMs(state, user),
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChannel: channelId => dispatch(getChannel(channelId)),
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageNav));
