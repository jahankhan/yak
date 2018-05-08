import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../session_form/login_container';
import LoginNav from './login_navbar';

class LoginPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <LoginNav />
        <LoginForm />
      </div>
    );
  }

}

export default LoginPage;
