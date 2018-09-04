import React, { Component } from 'react';
import './style.css';

class ResultListLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  componentDidMount() {
    this.showTimeout = setTimeout(() => this.setState({show: true}));
  }

  componentWillUnmount() {
    this.setState({show: false});
    clearTimeout(this.showTimeout);
  }

  render() {
    const { show } = this.state;
    return (
      <div className="result-list-loading">
        <ul>
          {
            Array.from(Array(20), (e, i) => (
              <li key={i}>
                <div
                  className={`result-list-loading-item ${show ? 'show' : ''}`}
                  ></div>
              </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default ResultListLoading;