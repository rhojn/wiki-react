import React, { Component } from 'react';
import './style.css';

import ResultList from './ResultList';
import ResultListLoading from './ResultListLoading';

class ResultBox extends Component {
  render() {
    const { results } = this.props;
    return (
      <div className="result-box">
        { results.length ? (<ResultList results={results} />) : (<ResultListLoading />)}
      </div>
    )
  }
}

export default ResultBox;