import React, { Component } from 'react';
import './style.css';

import githubMark from '../../assets/images/github-mark.png';

import Container from '../Container';

class Header extends Component {
  render() {
    const { mode } = this.props;
    return (
      <header className={ `header ${mode}` }>
        <Container>
          <div className="brand"><a href="/">Wiki</a></div>
          <div className="social"><a href="https://github.com/rhojn/wiki-react" rel="noreferrer noopener" target="_blank"><img src={githubMark} alt="Github Mark" /></a></div>
        </Container>
      </header>
    );
  }
}

export default Header;
