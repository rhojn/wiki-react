import React, { Component } from 'react';
import './style.css';

class Pagination extends Component {
  render() {
    const { pages, page, handlePageChange } = this.props;
    return (
      <div className="pagination">
        <ul className="pagination-wrapper">
          { page > 1 ? (<li className="pagination-item"><span data-page={page - 1} onClick={handlePageChange}>Previous</span></li>) : null }
          { Array.from(Array(Math.ceil(pages)), (e, i) => {
            const numPage = i+1;
            return (
              <li className={`pagination-item ${Number(page) === Number(numPage) ? "is-active" : ""}`} key={numPage}><span data-page={numPage} onClick={handlePageChange}>{numPage}</span></li>
            );
          })}
          { page < pages ? (<li className="pagination-item"><span data-page={page + 1} onClick={handlePageChange}>Next</span></li>) : null }
        </ul>
      </div>
    )
  }
}

export default Pagination;