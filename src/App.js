import React from 'react';
import { PropTypes } from 'prop-types';
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App  = ({ location }) => (
      <div className="ui container">
        <Route location={location} path="/" exact component={HomePage}/>
        <GuestRoute location={location} path="/login" exact component={LoginPage}/>
        <GuestRoute location={location} path="/register" exact component={RegisterPage}/>
        <UserRoute location={location} path="/dashboard" exact component={DashboardPage}/>
      </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    })
};

export default App;
