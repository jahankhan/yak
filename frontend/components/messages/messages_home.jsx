import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MessageList from './message_list';
import MessageNav from './message_navbar';
import MessageChannelNav from './message_channel_navbar';
import MessageComposer from './message_composer';

class MessagePage extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      window.scrollTo(0,0);
      this.props.history.push('/login');
    });
  }

  render(){
    return (
      <main className="messages-main">
        <MessageNav />
        <div className="messages-content-container">
          <MessageChannelNav />
          <MessageList />
          <MessageComposer />
        </div>
      </main>
    );
  }
}
// <div>
//   <form onSubmit={this.handleLogout} className="logout-form">
//     <input className="logout-btn" type="submit" value="Sign out"></input>
//   </form>
// </div>



export default MessagePage;
