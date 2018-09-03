import React, { Component } from 'react';
import './style.css';

class ResultItem extends Component {
  render() {
    const { result } = this.props;
    return (
        <a href={ result.link}>
          <div className="result-item">
            <div className="result-item-wrapper">
              <h1 className="result-title">{ result.id }. { result.title }</h1>
              <p className="result-body">{ result.body}</p>
            </div>
          </div>
        </a>
    )
  }
}

export default ResultItem;