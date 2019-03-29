import React, { Component } from 'react';
import './style.css';
import Icon from '../Icon';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const keyword = e.target.value;
    this.setState({keyword});
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { keyword } = this.state;
    if(keyword) {
      this.props.handleSearchSubmit(keyword);
    }
  }

  render() {
    const { keyword } = this.state;

    return (
    <div className="search-box">
      <form className="search-form" onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search the Wikipedia"
          value={keyword}
          onChange={this.handleInputChange} />
        <button type="submit"><Icon icon="search"/></button>
      </form>
    </div>
    );
  }
}

export default SearchBox;
