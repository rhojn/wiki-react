import React, { Component } from 'react';
import './Search-box.css';
import Icon from '../icon/Icon';

class SearchBox extends Component {
  render() {
    return (
    <div className="search-box">
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search the Wikipedia" />
        <button type="submit"><Icon icon="search"/></button>
      </form>
    </div>
    );
  }
}

export default SearchBox;
