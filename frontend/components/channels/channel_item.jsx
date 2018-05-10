import React from 'react';
import { connect } from 'react-redux';
import { addUserToChannel } from '../../actions/channel_actions';

class ChannelItem extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.props.addUserToChannel(this.props.channel.id);
  }

  render() {
    // debugger
    return (
      <form onSubmit={this.handleSubmit} className="channel-list-item-form">
        <h2>{this.props.channel.title}</h2>
        <input className="join-channel-btn" type="submit" value="Join"></input>
      </form>
    );
  }
}
// const mapStateToProps = ({ entities }) => {
//   return {
//     channel: entities.channels,
//     formType: 'Sign In'
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    addUserToChannel: channelId => dispatch(addUserToChannel(channelId))
  };
};

export default connect(null, mapDispatchToProps)(ChannelItem);
