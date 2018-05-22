import React from 'react';
import { connect } from 'react-redux';
import LoginNav from './login_navbar';
import SignupForm from '../session_form/signup_container';

class SignupPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div>
        <LoginNav />
        <main className="signup-main">
          <div className="login-modal">
            <SignupForm />
          </div>
        </main>
      </div>
    );
  }

}

export default SignupPage;
