import React from 'react';

class LoginNav extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <nav className="login-navbar">
        <div className="login-list-container">
          <h1>Yak</h1>
          <ul className="login-nav-list">
            <li>Linkedin</li>
            <li>Github</li>
            <li>Email</li>
          </ul>
        </div>
      </nav>
    );
  }

}

export default LoginNav;
