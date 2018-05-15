import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  update(e) {
    this.setState({title: e.currentTarget.value});
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
  // <label className="channel-form-switch">
  //   <input type="channel-form-checkbox" />
  //   <span className="channel-form-slider"></span>
  // </label>
  render(){
    return (
      <div className='channel-form-main'>
        <h1>Create Channel</h1>
        <div className="channel-switch-conatiner">
          <label className="channel-form-switch">
            <input className="channel-form-checkbox" type="checkbox" />
            <span className="channel-form-slider"></span>
          </label>
        </div>

        <h4>Enter title</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="channel-form">
            <input required type="text" onChange={this.update} placeholder="example channel" value={this.state.title}></input>
            <input className="join-channel-btn" type="submit" value="Create"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ChannelForm);
