import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChannelItem from './channel_item';
import { selectAllChannels } from '../../reducers/selectors';
import { getAllChannels } from '../../actions/channel_actions';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // if (this.props.)
    // debugger
    this.props.getAllChannels();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/channels/new');

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
        <div className="channel-list-header-container">
          <h1>Join a Channel</h1>
          <button onClick={this.handleSubmit}>Create</button>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList));
