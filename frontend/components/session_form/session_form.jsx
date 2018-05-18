import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: this.props.history.location.search.slice(1),
      avatar_url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then((response) => {
      window.scrollTo(0,0);
      this.setState({username: '', password: '', avatar_url: '', email: ''});
      if(response.currentUser.active_channel){
        this.props.history.push(`/channels/${response.currentUser.active_channel}/messages`);
      } else {
        this.props.history.push('/channels');
      }
    });
  }

  loginGuest(login, password, i, j, button) {

    // debugger
    if (i < login.length) {
      // debugger
      let string = this.state.username + login[i];
      this.setState({username: string}, () => {
        window.setTimeout(() => {
          this.loginGuest(login, password, ++i, j, button);
        }, 75);
      });
    } else {
      if( j === password.length) {
        button.click();
        return;
      }
      let string = this.state.password + password[j];
      this.setState({password: string}, () => {
        window.setTimeout(() => {
          this.loginGuest(login, password, i, ++j, button);
        }, 75);
      });
    }
    //
  }

  demoUser() {
    const login = "guest";
    const password = "starwars";
    const button = document.getElementById("session-submit-btn");
    let i = 0;
    let j = 0;
    this.loginGuest(login, password, i, j, button);

  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  getPlaceholderText(field) {
    switch(field) {
      case 'username':
        return 'Guest';
      case 'email':
        return 'you@example.com';
      case 'avatar_url':
        return 'example.com/asd23sdf134s';
      case 'password':
        return 'password';
      case 'Sign Up':
        return 'Enter your username, email address, and password';
      case 'Sign In':
        return 'Enter your username and email address';
      default:
        return '';
    }
  }

  getInputType(field) {
    switch(field) {
      case 'password':
        return 'password';
      default:
        return 'text';
    }
  }

  getHeader(type) {
    if (type === 'Sign Up') {
      return 'up';
    } else {
      return 'in';
    }
  }

  renderInputs(field) {
    return (
      <div className="login-input-container">
        <input type={this.getInputType(field)}
          value={this.state[field]}
          onChange={this.update(field)}
          className="login-input"
          placeholder={this.getPlaceholderText(field)}
          required
        />
      </div>
    );
  }



  // {this.props.formType === "Sign Up" ? this.renderInputs('avatar_url') : ''}
  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2>Sign {this.getHeader(this.props.formType)} to App Academy</h2>
          {this.renderErrors()}
          <h6>{this.getPlaceholderText(this.props.formType)}</h6>
          <div className="login-form">
            <br/>
            {this.renderInputs('username')}
            {this.props.formType === "Sign Up" ? this.renderInputs('email') : ''}
            {this.renderInputs('password')}
            <input id="session-submit-btn" className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        {this.props.match.url === '/login' ? <button className="demo-user-btn" onClick={this.demoUser}>Log in as guest user</button> : ''}
      </div>
    );
  }
}

export default withRouter(SessionForm);
