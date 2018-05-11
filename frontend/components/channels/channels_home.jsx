import React from 'react';
import LoginNav from '../login_page/login_navbar';
import ChannelList from './channel_list';
import ChannelForm from './channel_form';

class ChannelPage extends React.Component {
  constructor(props){
    super(props);
    // this.getListOrForm = this.getListOrForm.bind(this);
  }

  getListOrForm(){
    // debugger
    if(this.props.history.location.pathname === '/channels') {
      return <ChannelList />;
    } else {
      return <ChannelForm />;
    }
  }
  // {this.getProperItem()}
  //
  // {this.getListOrForm()}
  render(){
    return (
      <div>
        <LoginNav />
        <main className="main">
          {this.getListOrForm()}
        </main>
      </div>
    );
  }

}

export default ChannelPage;
