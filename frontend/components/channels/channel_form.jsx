import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createChannel } from '../../actions/channel_actions';

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
      // debugger
      this.props.history.push(`/channels/${data.currentChannel.id}/messages`);
    });
  }
  render(){
    return (
      <div className='channel-form-main'>
        <h1>Create Channel</h1>
        <h4>Enter title</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="channel-form">
            <input type="text" onChange={this.update} placeholder="example channel" value={this.state.title}></input>
            <input className="join-channel-btn" type="submit" value="Create"></input>
          </div>
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createChannel: channel => dispatch(createChannel(channel))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(ChannelForm));
