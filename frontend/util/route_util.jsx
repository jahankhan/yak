import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  // we have destructured the component prop and assigned it to a new
  // variable called "Component" so we can render it as a React Component
  //const Component = component // equivalent to what we do in the parameters
  return (
    <Route path={path} exact={exact} render={(props) => {
        if (!loggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/channels" />;
        }
      }
    } />
  );
};

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

export const AuthRoute = withRouter(
  connect(mapStateToProps)(Auth)
);

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
