import React, { Component } from 'react';
import './style.css';

import Header from '../Header';
import SearchBox from '../SearchBox';
import Container from '../Container';

class  Hero extends Component {
  render() {
    const { mode, quote, handleSearchSubmit } = this.props;
    return (
      <div className={`hero ${mode}`}>
        <Header mode={mode} />
        <Container>
          { mode ===   "initialized" ? (
            <div className="hero-brand">
              <a href="/">WIKI</a>
            </div>
            ) : null }
          <SearchBox handleSearchSubmit={handleSearchSubmit} />
          { mode === "initialized" ? (
            <div className="quote-box">
              <p>{ quote.text }</p>
              <p>{ `- ${quote.author}` }</p>
            </div>
            ) : null }
        </Container>
      </div>
    );
  }
}

export default Hero;