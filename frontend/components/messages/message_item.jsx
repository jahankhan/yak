import React from 'react';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return (
      <div className="message-item">
        <div className="avatar-img">
          AVT
        </div>
        <div className="message-item-content">
          <div className="message-user-info">
            <span className="message-author">{this.props.message.author_id}</span>
            <span className="message-timestamp">{this.props.message.created_at}</span>
          </div>
          <div className="message-body">
            <span>{this.props.message.body}</span>
          </div>
        </div>
      </div>

    );
  }
}
// // const mapStateToProps = ({ entities }) => {
// //   return {
// //     message: entities.messages,
// //     formType: 'Sign In'
// //   };
// // };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     addUserToMessage: messageId => dispatch(addUserToMessage(messageId))
//   };
// };

export default MessageItem;
//
