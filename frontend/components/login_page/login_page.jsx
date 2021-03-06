import React from 'react';
import { connect } from 'react-redux';
import LoginNav from './login_navbar';
import LoginForm from '../session_form/login_container';

class LoginPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    
    return (
      <div>
        <LoginNav />
        <main className="signup-main">
          <div className="login-modal">
            <LoginForm />
          </div>
        </main>
      </div>
    );
  }

}

export default LoginPage;
