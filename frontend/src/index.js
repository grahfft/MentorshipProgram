import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CharacterForm from "./containers/CharacterForm/CharacterForm";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/character' component={CharacterForm} />
    </div>
  </Router>,
  document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById('root'));