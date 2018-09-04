import React, { Component } from 'react';
import './style.css';

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  componentDidMount() {
    this.showTimeout = setTimeout(() => this.setState({show: true}));
  }

  componendWillUnmount() {
    clearTimeout(this.showTimeout);
  }

  render() {
    const { show } = this.state;
    const { result, index } = this.props;
    return (
        <a href={ result.link} className={`result-item-link ${show ? 'show' : ''}`} style={{transitionDelay: `.${3 + index}s`}}>
          <div className="result-item">
            <div className="result-item-wrapper">
              <h1 className="result-title">{ result.title }</h1>
              <p className="result-body">{ result.body }</p>
            </div>
          </div>
        </a>
    )
  }
}

export default ResultItem;