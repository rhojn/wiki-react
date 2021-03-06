import React, { Component } from 'react';
import './style.css';

class Icon extends Component {
  render() {
    const { icon } = this.props;
    return (
      <div className="icon-wrapper">
        <span className={`${icon} icon`}></span>
      </div>
    );
  }
}

export default Icon;
