import React, { Component } from 'react';
import DeckEditor from './components/Decks/DeckEditor';
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
        <div className="deck-editor-container">
            <DeckEditor />
        </div>
      </div>
    );
  }
}

export default App;
