import React from 'react';
import { Link } from 'react-router-dom';

class LoginNav extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <nav className="login-navbar">
        <div className="login-list-container">
          <div className="nav-logo">
            <a href="/"><img src={window.staticImages.yak} /><h1>Yak</h1></a>
          </div>
          <ul className="login-nav-list">
            <li><a href="https://www.linkedin.com/in/jahankhan1"><img src={window.staticImages.linkedin} /></a></li>
            <li><a href="https://github.com/jahankhan"><img src={window.staticImages.github} /></a></li>
            <li><a href="mailto:jahanatakhan@gmail.com"><img src={window.staticImages.email} /></a></li>
            <li><Link to="/login">Sign in</Link></li>
          </ul>
        </div>
      </nav>
    );
  }

}

export default LoginNav;
