import React from 'react';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return (
      <li className="message-item-container">
        <h2>{this.props.message.body}</h2>
      </li>

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
