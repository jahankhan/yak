import React from 'react';

class MessageChannelNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return (
      <header className="message-channel-navbar">
        <div className="message-channel-navbar-left">
          <button className="channel-navbar-btn">#2018-03-19-nyc</button>
          <div className="channel-navbar-small-btns">
            <span className="channel-small-items">s</span>
            <span className="channel-small-items">numU</span>
            <span className="channel-small-items">pin</span>
            <span className="channel-small-items">Add a topic</span>
          </div>
        </div>
        <div className="message-channel-navbar-right">
          <div className="search-container">
            <input type="text" placeholder="Search"></input>
          </div>
        </div>
      </header>

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
