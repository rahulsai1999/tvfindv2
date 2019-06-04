import React, { Component } from 'react';
import './pagination.css'

class Pagin extends Component {
  render() {
    const { previous, next, page } = this.props;
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" onClick={previous}>Previous</a>
            </li>
            <li className="page-item"><a className="page-link">{page}</a></li>
            <li className="page-item">
              <a className="page-link" onClick={next}>Next</a>
            </li>
          </ul>
        </nav>

      </div>
    )
  }
}

export default Pagin;