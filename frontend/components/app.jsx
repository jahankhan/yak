import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './login_page/home_page';
import LoginPage from './login_page/login_page';
import SignupPage from './login_page/signup_page';
import ChannelPage from './channels/channels_home';
import ChannelFormPage from './channels/channel_form';
import MessagePage from './messages/messages_home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <AuthRoute exact path='/' component={HomePage} />
        <AuthRoute path='/login' component={LoginPage} />
        <AuthRoute path='/signup' component={SignupPage} />
        <ProtectedRoute exact path='/channels' component={ChannelPage} />
        <ProtectedRoute exact path='/channels/new' component={ChannelPage} />
        <ProtectedRoute path='/channels/:channelId/messages' component={MessagePage} />

      </div>
    );
  }
}
// <Route path='/channel/:channelId/messages' component={LoginPage} />

export default App;
