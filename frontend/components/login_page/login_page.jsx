import React from 'react';
import { connect } from 'react-redux';
import LoginNav from './login_navbar';

class LoginPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <LoginNav />
        <main className="main">
          <h1>whatup</h1>

        </main>
      </div>
    );
  }

}

export default LoginPage;
