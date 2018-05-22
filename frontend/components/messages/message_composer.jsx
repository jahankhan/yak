import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAvatar } from '../../actions/session_actions';
import { getChannel } from '../../actions/channel_actions';
import { createMessage } from '../../actions/message_actions';

class MessageComposer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      imageFile: null,
      imageUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitAvatar = this.handleSubmitAvatar.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.callFileInput = this.callFileInput.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.renderDmTitle = this.renderDmTitle.bind(this);
  }

  renderDmTitle(arr) {
    if (typeof arr === 'undefined'){
      return '';
    }
    return arr.map(id => this.props.users[id].username).join(', ');
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = {
      body: this.state.body,
      author_id: this.props.current_user.id,
      channel_id: this.props.match.params.channelId
    };
    App.room.speak(message);
    this.setState({body: ''});
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value});
  }

  updateFile(e) {

    e.preventDefault();
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append("user[avatar]", file);
    this.props.setAvatar(formData, this.props.current_user.id).then(() => {
      this.setState({imageFile: null, imageUrl: null});
    });
  }

  handleSubmitAvatar(e) {

    e.preventDefault();


  }

  callFileInput() {
    // document.getElementById("file-attacher-btn").click();
  }

  componentDidMount() {
    this.props.getChannel(this.props.match.params.channelId);
  }

  render() {
    let channelTitle;
    if(typeof this.props.channel === 'undefined' || typeof this.props.channel.userIds === 'undefined') {

      channelTitle = '';

    } else {
      if(this.props.channel.dm) {

        channelTitle = `@ ${this.renderDmTitle(this.props.channel.userIds)}`;
      } else {
        channelTitle = `#${this.props.channel.title}`;
      }

    }
    return (
      <footer className="message-footer">
        <div className="message-footer-container">
          <button className="message-attachment-btn" onClick={this.callFileInput}>+</button>
          <input onChange={this.updateFile} type="file" className="file-attacher" id="file-attacher-btn"></input>
          <div className="message-form-input-container">
            <form onSubmit={this.handleSubmit} className="message-create-form">
              <input onChange={this.updateBody} className="message-form-input" type="text" placeholder={`Message ${channelTitle}`} value={this.state.body}></input>
            </form>
          </div>
        </div>
      </footer>
    );
  }
}
const mapStateToProps = (state, ownProps) => {

  const channelId = ownProps.match.params.channelId;
  return {
    current_user: state.session,
    channel: state.entities.channels[channelId],
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChannel: channelId => dispatch(getChannel(channelId)),
    setAvatar: (formData, userId) => dispatch(setAvatar(formData, userId)),
    createMessage: message => dispatch(createMessage(message)),
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MessageComposer));
