import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class MessagePage extends React.Component {
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

  render(){
    return (
      <main>
        <h1>main page bud</h1>
        <form onSubmit={this.handleSubmit} className="logout-form">
          <input className="logout-btn" type="submit" value="Sign out"></input>
        </form>
      </main>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     errors: errors.session,
//     formType: 'Sign In'
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(MessagePage);
