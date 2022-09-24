import logo from '../logo.svg';
import Header from './Header';
import IssueList from './IssueList';
import React, { useState, useEffect } from 'react'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
