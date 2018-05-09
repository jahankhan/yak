import React from 'react';
import { connect } from 'react-redux';
import LoginNav from './login_navbar';
import LoginForm from '../session_form/login_container';
import SessionForm from '../session_form/session_form';

class LoginPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    // debugger
    return (
      <div>
        <LoginNav />
        <main className="main">
          <div className="login-modal">
            <LoginForm />
          </div>
        </main>
      </div>
    );
  }

}

export default LoginPage;
