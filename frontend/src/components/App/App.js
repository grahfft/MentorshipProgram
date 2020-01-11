import React, { Component } from 'react';
import './App.css';
import Basics from '../Basics/Basics';
import Stats from '../Stats/Stats';
import Feats from "../Feats/Feats";
import ButtonPanel from "../ButtonPanel/ButtonPanel";

class App extends Component {
  render() {
    return (
      <div className={'app-container'}>
        <h1 className={'title'}>Dungeons & Dragons Character Creator</h1>
        <Basics />
        <Stats />
        <Feats />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
