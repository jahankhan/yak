import React from 'react';
import LoginNav from '../login_page/login_navbar';
import ChannelList from './channel_list';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <LoginNav />
        <main className="main">
          <ChannelList />
        </main>
      </div>
    );
  }

}

export default HomePage;
