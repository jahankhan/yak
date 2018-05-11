import React from 'react';

class MessageNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return (
      <nav className="message-navbar">
        <div className="message-navbar-inner">
          <ul className="message-navbar-list">
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

export default MessageNav;
