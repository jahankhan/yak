import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../session_form/login_container';
import LoginNav from './login_navbar';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <LoginNav />
        <main className="main">
          <section className="slack-img">
            <img src={window.staticImages.slack_home} />
          </section>
          <header className="signup-body">
            <h1 className='header-h1'>Where Work Happens</h1>
            <p className='header-text'>When your team needs to kick off a project, hire a new employee,
              deploy some code, review a sales contract, finalize next year's budget,
              measure an A/B test, plan your next office opening, and more, Yak has
              you covered.
            </p>
          </header>
        </main>
      </div>
    );
  }

}

export default HomePage;
