import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginNav extends React.Component {
  constructor(props){
    super(props);
  }

  getOppositeForm() {
    // debugger
    if(typeof this.props.history === 'undefined') {
      return <Link to="/login">Sign in</Link>;
    } else {
      if(this.props.history.location.pathname === '/signup') {
        return <Link to="/login">Sign in</Link>;
      } else {
        return <Link to="/signup">Sign up</Link>;
      }
    }

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
            <li>{this.getOppositeForm()}</li>
          </ul>
        </div>
      </nav>
    );
  }

}

export default withRouter(LoginNav);
