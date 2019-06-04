import React, { Component } from "react";
import "./searchbar.css";
import { MdSearch } from "react-icons/md";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { textch, submitf } = this.props;
    return (
      <div>
        <form className="form-inline">
          <div className="container">
            <input type="text" className="form-control" onChange={textch} />
            <button
              type="submit"
              className="search-btn btn btn-success"
              onClick={submitf}
            >
              Search <MdSearch />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
