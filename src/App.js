import React, { Component, Fragment } from 'react';
import './App.css';

import Container from './components/Container';
import Hero from './components/Hero';
import ResultBox from './components/ResultBox';
import Pagination from './components/Pagination';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      mode: "initialized",
      error: null,
      results: [],
      cachedResults: [],
      page: 1,
      pages: null,
      paginationLoading: false,
      endOfPage: false,
      quote: {
        text: "",
        author: "",
      }
    }

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  handlePageChange(e) {
    const { cachedResults, page } = this.state;
    const toPage = Number(e.target.dataset.page);
    if(toPage !== page) {
      const start = toPage === 1 ? 0 : toPage === 2 ? 20 : (toPage - 1)  * 20;
      const end = start + 20;
      this.setState({results: cachedResults.slice(start, end), page: toPage});
    }
  };

  handleSearchSubmit(searchKeyword) {
    const { keyword } = this.state;
    const apiLink = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchKeyword}&limit=max&format=json&origin=*`;
    
    if(searchKeyword !== keyword) {
      this.setState({mode: "loading", results: [], cachedResults: [], page: 1, pages: null});
      fetch(apiLink)
        .then(res => res.json())
        .then((data) => {
          const cleanedData = data.slice(1);
          const formatData = cleanedData[0].map((data, index) => {
            return {
              id: index + 1,
              title: data,
              body: cleanedData[1][index],
              link: cleanedData[2][index]
            }
          });

          this.setState({
            mode: "success",
            results: formatData.slice(0, 20),
            cachedResults: formatData,
            keyword: searchKeyword,
            pages: formatData.length / 20
          });
        }, (error) => {
            console.error(error);
            this.setState({
              mode: "initialized",
              error,
              keyword: searchKeyword
            });
          }
        )
    }
  }

  fetchQuote() {
    const url = "https://quotes.rest/qod";
    fetch(url, { method: "GET"})
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        const item = data.contents.quotes[0];
        this.setState({quote: { text: item.quote, author: item.author }});
      }, (error) => {
          console.error(error);
        }
      )
  }
  
  render() {
    const { mode, results, page, pages, quote } = this.state;
    return (
      <div className="wiki">
        <div className="main">
          <Hero mode={mode} quote={quote} handleSearchSubmit={this.handleSearchSubmit} />
          <Container>
            {
              mode !== "initialized" ?
              (
                <Fragment>
                  <ResultBox mode={mode} results={results} />
                  <Pagination pages={pages} page={page} handlePageChange={this.handlePageChange} />
                </Fragment>
              ) : null
            }
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
