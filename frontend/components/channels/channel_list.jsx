import React from 'react';
import { connect } from 'react-redux';
import ChannelItem from './channel_item';
import { selectAllChannels } from '../../reducers/selectors';
import { getAllChannels } from '../../actions/channel_actions';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // if (this.props.)
    // debugger
    this.props.getAllChannels();
  }

  createListItems() {
    // return this.props.
    // debugger
    // if(this.props.getAllChannels.length === 0) {
    //   return ;
    // }
    return (
      Object.keys(this.props.channels).map((channelId) => {
        // debugger
        return <ChannelItem key={channelId} channel={this.props.channels[channelId]} />;
      })
    );
  }

  render() {
    // debugger
    return (
      <ul className="channel-list">
        <h1>Join a Channel</h1>
        {this.createListItems()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger
  // state.entitites.channels ;
  return {
    channels: state.entities.channels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // selectAllChannels: () => dispatch(login(user)),
    getAllChannels: () => dispatch(getAllChannels())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
