import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getChannel } from '../../actions/channel_actions';

class MessageComposer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      window.scrollTo(0,0);
      this.props.history.push('/login');
    });
  }

  componentDidMount() {
    this.props.getChannel(this.props.match.params.channelId);
  }

  render() {
    let channelTitle;
    if(typeof this.props.channel === 'undefined') {
      // debugger
      channelTitle = '';

    } else {
      // debugger
      channelTitle = this.props.channel.title;
    }
    return (
      <footer className="message-footer">
        <div className="message-footer-container">
        <button className="message-attachment-btn">+</button>
        <div className="message-form-input-container">
          <form onSubmit={this.handleSubmit} className="message-create-form">
            <input className="message-form-input" type="text" placeholder={`Message #${channelTitle}`}></input>
          </form>
        </div>
        </div>
      </footer>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  // debugger
  const channelId = ownProps.match.params.channelId;
  return {
    channel: state.entities.channels[channelId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChannel: channelId => dispatch(getChannel(channelId)),
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MessageComposer));
//
