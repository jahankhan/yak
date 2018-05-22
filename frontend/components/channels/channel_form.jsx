import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import UserItem from './user_item';

class ChannelForm extends React.Component {
  constructor(props){
    super(props);

    const dm = this.props.match.url === '/channels/new/' ? true : false;
    this.state = {
      title: '',
      isDm: dm,
      dmUsers: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDmSubmit = this.handleDmSubmit.bind(this);
    this.update = this.update.bind(this);
    this.toggleDm = this.toggleDm.bind(this);
    this.whichForm = this.whichForm.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
    this.parentUpdate = this.parentUpdate.bind(this);
  }

  parentUpdate(username) {

    if(this.state.dmUsers === '') {
      return this.setState({dmUsers: this.state.dmUsers + username});
    } else {
      return this.setState({dmUsers: `${this.state.dmUsers}, ${username}`});
    }
  }
  componentDidMount() {
    this.props.getAllUsers();
  }


  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel({title: this.state.title}).then((data) => {
      const keys = Object.keys(data.currentChannel);
      const currentChannel = keys[keys.length-1];
      this.props.addUserToChannel(currentChannel).then(() => {
        this.props.setActiveChannel(this.props.current_user.id, currentChannel).then(() => {
          this.props.history.push(`/channels/${currentChannel}/messages`);
        });
      });
    });
  }

  handleDmSubmit(e) {
    e.preventDefault();
    const users = this.state.dmUsers.split(/,| /);
    this.props.createChannel({title: '-bad-', dm: true}).then((data) => {
      const keys = Object.keys(data.currentChannel);
      const currentChannel = keys[keys.length-1];

      for (var i = 0; i < users.length; i++) {
        this.props.addOtherUserToChannel(users[i], currentChannel);
      }
      this.props.addUserToChannel(currentChannel).then(() => {
        this.props.setActiveChannel(this.props.current_user.id, currentChannel).then(() => {
          this.props.history.push(`/channels/${currentChannel}/messages`);
        });
      });
    });
  }

  toggleDm() {
    if (this.state.isDm === false) {
      this.setState({title: '', dmUsers: '', isDm: true});
    } else {
      this.setState({title: '', dmUsers: '', isDm: false});
    }
  }

  whichForm() {
    if(this.state.isDm) {
      return (
        <div className='channel-form-main'>
          <h1>Create Direct Message</h1>
          <div className="channel-switch-conatiner">
            <label className="channel-form-switch">
              <input className="channel-form-checkbox" type="checkbox" onClick={this.toggleDm} />
              <span className="channel-form-slider"></span>
            </label>
          </div>

          <h4>Enter users</h4>
          <form onSubmit={this.handleDmSubmit}>
            <div className="channel-form">
              <input required type="text" onChange={this.update('dmUsers')} placeholder="example user, user2" value={this.state.dmUsers}></input>
              <input className="join-channel-btn" type="submit" value="Create"></input>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className='channel-form-main'>
          <h1>Create Channel</h1>
          <div className="channel-switch-conatiner">
            <label className="channel-form-switch">
              <input className="channel-form-checkbox" type="checkbox" onClick={this.toggleDm} />
              <span className="channel-form-slider"></span>
            </label>
          </div>

          <h4>Enter title</h4>
          <form onSubmit={this.handleSubmit}>
            <div className="channel-form">
              <input required type="text" onChange={this.update('title')} placeholder="example channel" value={this.state.title}></input>
              <input className="join-channel-btn" type="submit" value="Create"></input>
            </div>
          </form>
        </div>
      );
    }
  }

  renderUsers() {
    if (typeof this.props.users === 'undefined' || Object.keys(this.props.users).length === 0) {
      return '';
    } else {
      return Object.values(this.props.users).map(user => {
        if (user.id === this.props.current_user.id) {
          return;
        }
        return <UserItem key={user.id} user={user} update={this.parentUpdate}/>;
      });
    }
  }

  render(){
    return (
      <div className="channel-list">
        <Link to="/channels" className="create-channel-btn">Back to browse...</Link>
        <div className="channel-join-container">
          {this.whichForm()}
          <div className="channel-join-user-scroll">
            {this.state.isDm ? this.renderUsers() : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ChannelForm);
