import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewBookPage from './books/NewBookPage';
import WelcomeMessage from '../messages/WelcomeMessage';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

const DashboardPage = ({ isConfirmed, isAuthenticated }) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}
    {isAuthenticated ? <WelcomeMessage /> : <Redirect to="/login" />}
    <NewBookPage />
  </div>
);

DashboardPage.displayName = 'DashboardPage';

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    isConfirmed: !!state.user.confirmed,
    isAuthenticated: !!state.user.token,
  };
}

export default connect(mapStateToProps)(DashboardPage);
