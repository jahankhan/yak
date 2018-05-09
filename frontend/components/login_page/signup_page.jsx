import React from 'react';
import { connect } from 'react-redux';
import LoginNav from './login_navbar';
import SignupForm from '../session_form/signup_container';

class SignupPage extends React.Component {
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
            <SignupForm />
          </div>
        </main>
      </div>
    );
  }

}

export default SignupPage;
