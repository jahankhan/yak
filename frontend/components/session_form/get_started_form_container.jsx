import { connect } from 'react-redux';
import React from 'react';
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
    // debugger
    const user = Object.assign({}, this.state);
    this.props.history.push('/login');
  }

  // <Redirect to={{
  //     pathname: '/login',
  //     state: { email: this.state.email }
  //   }}  / > ;
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

// const mapStateToProps = ({ errors }) => {
//   return {
//     errors: errors.session,
//     formType: 'signup',
//     navLink: <Link to="/signup">sign up instead</Link>,
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     processForm: user => dispatch(login(user)),
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(GetStartedForm);
