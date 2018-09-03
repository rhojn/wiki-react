import React, { Component } from 'react';
import './style.css';

import ResultList from './ResultList';

class ResultBox extends Component {
  render() {
    const { results } = this.props;
    return (
      <div className="result-box">
        { results.length ? (<ResultList results={results} />) : "loading..."}
      </div>
    )
  }
}

export default ResultBox;