import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { logout, setAvatar } from '../../actions/session_actions';
import { getChannel } from '../../actions/channel_actions';
import { selectUserChannels, selectUserDMs } from '../../reducers/selectors';


class MessageNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      pmodalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.togglepModal = this.togglepModal.bind(this);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
    this.callFileInput = this.callFileInput.bind(this);
  }

  handleAvatarChange(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append("user[avatar]", file);
    this.props.setAvatar(formData, this.props.current_user.id).then(() => {
      // this.setState({imageFile: null, imageUrl: null});
    });
  }

  callFileInput() {
    document.getElementById("file-attacher-btn").click();
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
        return <NavLink key={dm.id} to={`/channels/${dm.id}/messages`} activeClassName="selected" className="channel-menu-item-link"><span key={dm.id} className="channel-menu-item"> @ {this.renderDmTitle(dm.userIds)}</span></NavLink>;
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

  togglepModal() {
    console.log("pclick");
    const pmodal = document.getElementById('profile-modal');
    if (this.state.pmodalOpen === false) {
      this.setState({pmodalOpen: true}, () => {
        pmodal.style.display = 'block';
      });
    } else {
      this.setState({pmodalOpen: false}, () => {
        pmodal.style.display = 'none';
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
                <Link to="" className="modal-user-avatar">
                  <img src={this.props.user.avatar_url}></img>
                </Link>
                <span className="modal-user-username">{this.props.user.username}</span>
              </div>
              <div onClick={this.togglepModal} className="modal-profile-btn-container">
                <span className="modal-profile-btn">Profile & account</span>
              </div>
              <div className="modal-signout-container">
                <button className="modal-signout" onClick={this.handleLogout}>Sign Out</button>
              </div>
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
            <Link to="/channels/new/" className="side-nav-header-link">
              <span className="side-nav-headers">Direct Messages</span>
            </Link>
            {this.renderDMs()}
          </div>
          <div className="profile-modal" id="profile-modal" style={{zIndex:3}}>
            <div className="profile-modal-header-container">
              <div className="profile-modal-header">
                <h2> Workspace Directory </h2>
              </div>
              <button className="profile-modal-back-btn" onClick={this.togglepModal}>x</button>
            </div>
            <section className="profile-modal-userinfo-container">
              <div className="profile-modal-user-avatar">
                <img src={this.props.user.avatar_url}></img>
                <input onChange={this.handleAvatarChange} type="file" className="file-attacher" id="file-attacher-btn"></input>
              </div>
              <div className="profile-modal-username">
                <h2>{this.props.user.username}</h2>
              </div>
              <div className="profile-modal-edit-avatar">
                <button className="profile-modal-edit-avatar-btn" onClick={this.callFileInput}>Edit Avatar</button>
              </div>
            </section>
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
    current_user: state.session,
    channels: selectUserChannels(state, user),
    dms: selectUserDMs(state, user),
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChannel: channelId => dispatch(getChannel(channelId)),
    logout: () => dispatch(logout()),
    setAvatar: (formData, userId) => dispatch(setAvatar(formData, userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageNav));
