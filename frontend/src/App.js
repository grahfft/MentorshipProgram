import React, { Component } from 'react';
import './App.css';
import CharacterForm from './containers/CharacterForm/CharacterForm';

class App extends Component {
  render() {
    return (
      <div className={'app-container'}>
        <h1 className={'title'}>Dungeons & Dragons Character Creator</h1>
        <CharacterForm />
      </div>
    );
  }
}

export default App;
