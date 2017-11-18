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

import PostFormPage from './components/posts/PostFormPage';
import PostShowPage from './components/posts/PostShowPage';
import PostListPage from './components/posts/PostListPage';

import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

import TopNavigation from './components/navigations/TopNavigation';

const App = ({ location, isAuthenticated }) => (
  <div className="ui container">
    {isAuthenticated && <TopNavigation />}
    <Route location={location} path="/" exact component={HomePage} />
    <UserRoute location={location} path="/adminz" exact component={DashboardPage} />

    <UserRoute location={location} path="/adminz/posts" exact component={PostListPage} />
    <UserRoute location={location} path="/adminz/posts/new" exact component={PostFormPage} />
    <UserRoute location={location} path="/adminz/posts/:id/edit" exact component={PostFormPage} />
    <UserRoute location={location} path="/adminz/posts/:id/show" exact component={PostShowPage} />

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
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email,
  };
}

export default connect(mapStateToProps)(App);
