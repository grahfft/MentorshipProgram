import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListCharacters from "./ListCharacters";
import CharacterEditForm from "./CharacterForm/CharacterEditForm";
import CharacterAddForm from "./CharacterForm/CharacterAddForm";

class DnDApp extends Component {
  render() {
    return (
      <div>
        <div className={'title'}>
          <h1>Dungeons & Dragons Character Creator</h1>
        </div>
        <div className={'container'}>
          <Router>
            <Switch>
              <Route path='/' exact component={ListCharacters} />
              <Route path='/characters' component={ListCharacters} />
              <Route path='/character/:id' component={CharacterEditForm} />
              <Route path='/character/create' component={CharacterAddForm} />
            </Switch>
          </Router>
          <ListCharacters />
        </div>
      </div>
    );
  }
}

export default DnDApp;