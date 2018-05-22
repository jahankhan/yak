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
    this.props.getAllChannels();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/channels/new');

  }

  createListItems() {
    return (
      Object.keys(this.props.channels).map((channelId) => {

        return <ChannelItem key={channelId} channel={this.props.channels[channelId]} />;
      })
    );
  }

  render() {

    return (
      <ul className="channel-list">
        <button className="create-channel-btn" onClick={this.handleSubmit}>Create channel...</button>
        <div className="channel-join-container">
          <div className="channel-list-header-container">
            <h1>Browse channels</h1>

          </div>
          <div className="channel-list-scroll">
            <div className="channels-join-header">
              Channels you can join
            </div>
            {this.createListItems()}
          </div>
        </div>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.entities.channels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllChannels: () => dispatch(getAllChannels())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList));
