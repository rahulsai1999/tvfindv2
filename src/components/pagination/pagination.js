import React, { Component } from 'react';
import './pagination.css'

class Pagin extends Component {
  render() {
    const { previous, next, page } = this.props;
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item" onClick={previous}>
              <div className="page-link" onClick={previous}>Previous</div>
            </li>
            <li className="page-item"><div className="page-link">{page}</div></li>
            <li className="page-item">
              <div className="page-link" onClick={next}>Next</div>
            </li>
          </ul>
        </nav>

      </div>
    )
  }
}

export default Pagin;