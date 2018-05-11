import React from 'react';

class MessageChannelNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return (
      <nav className="message-channel-navbar">
        <div className="message-channel-navbar-inner">
          <ul className="message-channel-navbar-list">
          </ul>
        </div>
      </nav>

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

export default MessageChannelNav;
