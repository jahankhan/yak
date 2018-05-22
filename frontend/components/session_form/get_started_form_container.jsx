import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

class GetStartedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
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
    window.scrollTo(0,0);
    this.props.history.push({
      pathname: '/signup',
      search: this.state.email
    });
  }

  render() {
    return (
      <div className="get-started-form-container">
        <form onSubmit={this.handleSubmit} className="get-started-form-box">
          <div className="get-started-form">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="email-input"
                placeholder="Email address"
              />
            <input className="get-started-submit" type="submit" value="GET STARTED" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(GetStartedForm);
