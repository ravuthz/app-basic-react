import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Route path="/" exact component={HomePage}/>
          <Route path="/login" exact component={LoginPage}/>
        </div>
      </div>
    );
  }
}

export default App;
