import React from 'react';
import { withRouter } from 'react-router-dom';

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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      this.setState({username: '', password: '', avatar_url: '', email: ''});
      this.props.history.push('/channels');
    });

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
        return 'Enter your username, email address, avatar_url, and password';
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

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2>Sign {this.getHeader(this.props.formType)} to Whatever</h2>
          {this.renderErrors()}
          <h6>{this.getPlaceholderText(this.props.formType)}</h6>
          <div className="login-form">
            <br/>
            {this.renderInputs('username')}
            {this.props.formType === "Sign Up" ? this.renderInputs('email') : ''}
            {this.props.formType === "Sign Up" ? this.renderInputs('avatar_url') : ''}
            {this.renderInputs('password')}
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
