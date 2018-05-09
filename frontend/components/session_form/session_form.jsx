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

  renderInputs(field) {
    return (
      <label>{field}:
        <input type="text"
          value={this.state[field]}
          onChange={this.update(field)}
          className="login-input"
        />
      </label>
    );
  }

  render() {
    let email;
    let avatar_url;
    if(this.props.formType === "Sign Up") {
      email = (
        <label>Email:
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
          />
        </label>
      );
      // avatar_url = this.renderInputs('avatar_url');
      avatar_url = (
        <label>Avatar_Url:
          <input type="text"
            value={this.state.avatar_url}
            onChange={this.update('avatar_url')}
            className="login-input"
          />
        </label>
      );
    }
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            {this.renderInputs('username')}
            <br/>
            {this.props.formType === "Sign Up" ? email : ''}
            <br />
            {avatar_url}
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
