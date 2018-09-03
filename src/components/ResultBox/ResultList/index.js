import React, { Component } from 'react';
import './style.css';

import ResultItem from '../ResultItem';

class ResultList extends Component {
  render() {
    const { results } = this.props;
    console.log(results);
    return (
      <div className="result-list">
        <ul>
          {
            results.map((result) => (
              <li key={result.id}>
                <ResultItem result={result} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default ResultList;