import React from 'react';
import LoginNav from '../login_page/login_navbar';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <LoginNav />
        <main className="main">
          <h1>ChannelPage</h1>
        </main>
      </div>
    );
  }

}

export default HomePage;
