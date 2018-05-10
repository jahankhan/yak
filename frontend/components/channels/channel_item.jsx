import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserToChannel } from '../../actions/channel_actions';

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
      this.props.history.push(`/channels/${this.props.channel.id}/messages`);
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

export default withRouter(connect(null, mapDispatchToProps)(ChannelItem));
