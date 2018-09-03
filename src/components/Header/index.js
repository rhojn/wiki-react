import React, { Component } from 'react';
import './style.css';

import Container from '../Container';

class Header extends Component {
  render() {
    const { mode } = this.props;
    return (
      <header className={ `header ${mode}` }>
        <Container>
          <div className="brand"><a href="/">Wiki</a></div>
        </Container>
      </header>
    );
  }
}

export default Header;
