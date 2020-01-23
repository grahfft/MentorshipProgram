import React, { Component } from 'react';
import './App.css';
import CharacterForm from './containers/CharacterForm/CharacterForm';

class App extends Component {
  render() {
    return (
      <div>
        <div className={'title'}>
          <h1>Dungeons & Dragons Character Creator</h1>
        </div>
        <div className={'app-container'}>
          <CharacterForm />
        </div>
      </div>
    );
  }
}

export default App;
