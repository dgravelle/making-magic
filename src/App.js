import React, { Component } from 'react';
import SearchContainer from './components/Search/SearchContainer';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
