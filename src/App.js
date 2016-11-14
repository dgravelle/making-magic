import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
// import DeckEditor from './components/Decks/DeckEditor';
import './stylesheets/Keyrune-master/css/keyrune.min.css';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
            <NavBar />
            <main className="main">
                {this.props.children}
            </main>
      </div>
    );
  }
}

export default App;
