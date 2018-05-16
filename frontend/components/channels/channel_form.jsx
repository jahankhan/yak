import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      isDm: false,
      dmUsers: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDmSubmit = this.handleDmSubmit.bind(this);
    this.update = this.update.bind(this);
    this.toggleDm = this.toggleDm.bind(this);
    this.whichForm = this.whichForm.bind(this);
  }


  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.createChannel({title: this.state.title}).then((data) => {
      const keys = Object.keys(data.currentChannel);
      const currentChannel = keys[keys.length-1];
      this.props.addUserToChannel(currentChannel).then(() => {
        this.props.setActiveChannel(this.props.current_user.id, currentChannel).then(() => {
          this.props.history.push(`/channels/${currentChannel}/messages`);
        });
      });

      // this.props.history.push(`/channels/${currentChannel}/messages`);
    });
  }

  handleDmSubmit(e) {
    e.preventDefault();
    const users = this.state.dmUsers.split(/,| /);
    this.props.createChannel({title: '-bad-', dm: true}).then((data) => {
      debugger
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
              <input required type="text" onChange={this.update('dmUsers')} placeholder="example user" value={this.state.dmUser}></input>
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

  render(){
    // const form = this.state.isDm ? this.renderChannelForm() : this.renderDmForm;
    // if(this.state.isDm)
    return (
      <div className="channel-dm-form-creation-container">
        {this.whichForm()}
      </div>
    );
  }
}

export default withRouter(ChannelForm);
