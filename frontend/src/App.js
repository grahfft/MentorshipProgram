import React, { Component } from 'react';
import './App.css';
import DnDApp from "./containers/DnDApp";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <DnDApp />
      </div>
    );
  }
}

export default App;
