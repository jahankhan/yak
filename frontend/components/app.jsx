import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './login_page/home_page';
import LoginPage from './login_page/login_page';
import SignupPage from './login_page/signup_page';
import ChannelPage from './channels/channels_home';
import MessagePage from './messages/messages_home';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <Route exact path='/channels' component={ChannelPage} />
        <Route path='/channels/:channelId/messages' component={MessagePage} />

      </div>
    );
  }
}
// <Route path='/channel/:channelId/messages' component={LoginPage} />

export default App;
