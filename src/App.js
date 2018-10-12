import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Badge } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React

          </a>
        </header>

        <div>
          <Button color="primary">primary</Button>{' '}
          <Button color="secondary">secondary</Button>{' '}
          <Button color="success">success</Button>{' '}
          <Button color="info">info</Button>{' '}
          <Button color="warning">warning</Button>{' '}
          <Button color="danger">danger</Button>{' '}
          <Button color="link">link</Button>
        </div>

        <div>
            <h1>Heading <Badge color="secondary">New</Badge></h1>
            <h2>Heading <Badge color="secondary">New</Badge></h2>
            <h3>Heading <Badge color="secondary">New</Badge></h3>
            <h4>Heading <Badge color="secondary">New</Badge></h4>
            <h5>Heading <Badge color="secondary">New</Badge></h5>
            <h6>Heading <Badge color="secondary">New</Badge></h6>
          </div>
      </div>
    );
  }
}

export default App;
