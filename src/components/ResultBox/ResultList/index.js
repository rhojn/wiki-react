import React, { Component } from 'react';
import './style.css';

import ResultItem from '../ResultItem';

class ResultList extends Component {
  render() {
    const { results } = this.props;
    return (
      <div className="result-list">
        <ul>
            {
              results.map((result, index) => (
                <li key={index}>
                  <ResultItem index={index} result={result} />
                </li>
              ))
            }
        </ul>
      </div>
    )
  }
}

export default ResultList;