import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

class LoginNav extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      window.scrollTo(0,0);
      this.props.history.push('/login');
    });
  }

  getOppositeForm() {
    if(typeof this.props.history === 'undefined' || this.props.history.location.pathname === '/') {
      return <Link to="/login" id="sign-btn">Sign in</Link>;
    } else {
      if(this.props.history.location.pathname === '/signup') {
        return <Link to="/login" id="sign-btn">Sign in</Link>;
      } else if (this.props.history.location.pathname === '/login') {
        return <Link to="/signup" id="sign-btn">Sign up</Link>;
      } else {
        return (<form onSubmit={this.handleSubmit} className="logout-form">
          <input id="sign-btn" type="submit" value="Sign out"></input>
        </form>);
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
            <li><a className="email-link" href="mailto:jahanatakhan@gmail.com"><img className="email" src={window.staticImages.email} /></a></li>
            <li>{this.getOppositeForm()}</li>
          </ul>
        </div>
      </nav>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(LoginNav));
