import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserToChannel, setActiveChannel } from '../../actions/channel_actions';

class UserItem extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // debugger
    this.props.update(this.props.user.username);
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
      <div onClick={this.handleClick} className="channel-item-form-container">
        <div className="user-item-info-container">
          <div className="user-item-form-avatar">
            <img src={this.props.user.avatar_url} />
          </div>
          <h1>{this.props.user.username}</h1>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserItem));
