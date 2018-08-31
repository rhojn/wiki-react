import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Container from './components/container/Container';

class App extends Component {
  render() {
    return (
      <div className="wiki">
        <Header />
        <div className="main">
          <Container>Main</Container>
        </div>
      </div>
    );
  }
}

export default App;
