import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  // const store
  // let store;
  // if (window.currentUser) {
  //   const preloadedState = {
  //     session: { id: window.currentUser.id },
  //     entities: {
  //       users: { [window.currentUser.id]: window.currentUser }
  //     }
  //   };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Placeholder yoa</h1>, root);
});
