import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import LoginNav from '../login_page/login_navbar';
import ChannelList from './channel_list';
import ChannelForm from './channel_form_container';


class ChannelPage extends React.Component {
  constructor(props){
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

  getListOrForm(){

    if(this.props.history.location.pathname === '/channels') {
      return <ChannelList />;
    } else {
      return <ChannelForm />;
    }
  }

  handleBack() {
    if (typeof this.props.currentUser === 'undefined' || typeof this.props.currentUser.active_channel === 'undefined'
        || this.props.currentUser.active_channel === null) {
      return ;
    } else {
      this.props.history.push(`/channels/${this.props.currentUser.active_channel}/messages`);
    }
  }

  render(){
    return (
      <div>
        <button className="channel-back-btn" onClick={this.handleBack}>x</button>
        <LoginNav />
        <main className="channel-main">
          {this.getListOrForm()}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

export default withRouter(connect(mapStateToProps)(ChannelPage));
