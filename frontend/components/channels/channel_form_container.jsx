import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChannelForm from './channel_form';
import {
  createChannel,
  addUserToChannel,
  setActiveChannel
} from '../../actions/channel_actions';


const mapStateToProps = ({ session }) => {
  return {
    current_user: session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUserToChannel: channelId => dispatch(addUserToChannel(channelId)),
    setActiveChannel: (userId, channelId) => dispatch(setActiveChannel(userId, channelId)),
    createChannel: channel => dispatch(createChannel(channel))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));
