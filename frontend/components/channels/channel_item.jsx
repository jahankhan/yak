import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserToChannel, setActiveChannel } from '../../actions/channel_actions';

class ChannelItem extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addUserToChannel(this.props.channel.id).then(() => {
      // console.log(this);
      // debugger
      this.props.setActiveChannel(this.props.current_user.id, this.props.channel.id).then(() => {
        this.props.history.push(`/channels/${this.props.channel.id}/messages`);
      });

    });
    // console.log(this);
  }

  render() {
    // debugger
    return (
      <div className="channel-item-form-container">
        <form onSubmit={this.handleSubmit} className="channel-list-item-form">
          <div className='flex-channel-items'>
            <h2>{this.props.channel.title}</h2>
            <input className="join-channel-btn" type="submit" value="Join"></input>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = ({ session }) => {
  return {
    current_user: session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUserToChannel: channelId => dispatch(addUserToChannel(channelId)),
    setActiveChannel: (userId, channelId) => dispatch(setActiveChannel(userId, channelId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelItem));
