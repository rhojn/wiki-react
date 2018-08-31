import React, { Component } from 'react';
import './Header.css';

import Container from '../container/Container';
import SearchBox from '../search-box/Search-box';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "initiated" // ["initiated", "loaded", "scrolled"]
    }
  }
  render() {
    const { mode } = this.state;
    const className = `header ${mode}`;
    return (
      <header className={className}>
        <Container>
          <div className="brand"><a href="/">Wiki</a></div>
          <SearchBox />
        </Container>
      </header>
    );
  }
}

export default Header;
