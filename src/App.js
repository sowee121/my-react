import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'element-theme-default';

import MyNav from './pages/navMenu';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">React Demo</h1>
        </header>
        <div className="App-main">
          <MyNav></MyNav>
        </div>
      </div>
    );
  }
}

export default App;
