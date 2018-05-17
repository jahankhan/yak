import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChannelForm from './channel_form';
import { getAllUsers } from '../../actions/session_actions';
import {
  createChannel,
  addUserToChannel,
  addOtherUserToChannel,
  setActiveChannel
} from '../../actions/channel_actions';


const mapStateToProps = (state) => {
  return {
    current_user: state.session,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUserToChannel: channelId => dispatch(addUserToChannel(channelId)),
    addOtherUserToChannel: (username, channelId) => dispatch(addOtherUserToChannel(username, channelId)),
    setActiveChannel: (userId, channelId) => dispatch(setActiveChannel(userId, channelId)),
    createChannel: channel => dispatch(createChannel(channel)),
    getAllUsers: () => dispatch(getAllUsers())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));
