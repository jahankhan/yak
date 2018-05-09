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
      this.setState({username: '', password: ''});
    });
  }

  renderErrors() {
    return (
      <ul>
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
      default:
        return '';
    }
  }

  renderInputs(field) {
    return (
      <input type="text"
        value={this.state[field]}
        onChange={this.update(field)}
        className="login-input"
        placeholder={this.getPlaceholderText(field)}
      />
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2>Sign in to Whatever</h2>
          {this.renderErrors()}
          <h6>Enter your username, email adress, avatar_url, and password</h6>
          <div className="login-form">
            <br/>
            {this.renderInputs('username')}
            <br/>
            {this.props.formType === "Sign Up" ? this.renderInputs('email') : ''}
            <br />
            {this.props.formType === "Sign Up" ? this.renderInputs('avatar_url') : ''}
            <br />
            {this.renderInputs('password')}
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
