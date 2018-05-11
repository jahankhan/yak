import React from 'react';

class MessageNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return (
      <nav className="message-navbar">
        <div className="user-menu">
          <div className="team-name">App Academy</div>
          <div className="username">Jahan Khan</div>
        </div>
        <div className="channel-col">
          <div className="channel-menu">
            <span>Channels</span>
            <span className="channel-menu-item"># 2018-03-19-nyc</span>
            <span className="channel-menu-item"># general</span>
          </div>
          <div className="dm-menu">
            <span>Direct Messages</span>
            <span className="dm-menu-item">slackbot</span>
            <span className="dm-menu-item">Jahan Khan</span>
            <span className="dm-menu-item">Guest User</span>
          </div>
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
