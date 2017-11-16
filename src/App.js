import React from 'react';
import { PropTypes } from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import DashboardPage from './components/pages/DashboardPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';

import NewPostPage from './components/posts/NewPostPage';
import EditPostPage from './components/posts/EditPostPage';
import ShowPostPage from './components/posts/ShowPostPage';
import ListPostsPage from './components/posts/ListPostsPage';

import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

import TopNavigation from './components/navigations/TopNavigation';

const App = ({ location, isAuthenticated }) => (
  <div className="ui container">
    {isAuthenticated && <TopNavigation />}
    <Route location={location} path="/" exact component={HomePage} />
    <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />

    <UserRoute location={location} path="/dashboard/posts" exact component={ListPostsPage} />
    <UserRoute location={location} path="/dashboard/posts/new" exact component={NewPostPage} />
    <UserRoute
      location={location}
      path="/dashboard/posts/:id/edit"
      exact
      component={EditPostPage}
    />
    <UserRoute
      location={location}
      path="/dashboard/posts/:id/show"
      exact
      component={ShowPostPage}
    />

    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute location={location} path="/register" exact component={RegisterPage} />
    <GuestRoute
      location={location}
      path="/confirmation/:token"
      exact
      component={ConfirmationPage}
    />
    <GuestRoute location={location} path="/forgot_password" exact component={ForgotPasswordPage} />
    <GuestRoute
      location={location}
      path="/reset_password/:token"
      exact
      component={ResetPasswordPage}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email,
  };
}

export default connect(mapStateToProps)(App);
