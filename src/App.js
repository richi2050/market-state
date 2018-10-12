import React, { Component } from 'react';
import './App.css';
import Browser from './components/Nav';
import Header from './components/Header';
import List from './components/listServices';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Browser />
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
