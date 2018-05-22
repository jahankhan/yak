import React from 'react';
import { connect } from 'react-redux';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    if(typeof this.props.message.image !== 'undefined' && this.props.message.image !==
"/images/original/missing.png") {
      return <img src={this.props.message.image} />;
    } else {
      return <span className="message-body">{this.props.message.body}</span>;
    }
  }

  render() {
    let user;
    let avatar;

    if(typeof this.props.users === 'undefined') {
      user = '';
    } else {

      user = this.props.users[this.props.message.author_id];
      avatar = user.avatar_url;
    }

    if(this.props.message.image )
    return (
      <div className="message-item">
        <div className="avatar-img">
          <img src={avatar} alt="AVT"/>
        </div>
        <div className="message-item-content">
          <div className="message-user-info">
            <span className="message-author">{user.username}</span>
            <span className="message-timestamp">{this.props.message.created_at}</span>
          </div>
          <div className="message-body-container">

            {this.renderContent()}
          </div>
        </div>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.entities.users
  };
};

export default connect(mapStateToProps)(MessageItem);
