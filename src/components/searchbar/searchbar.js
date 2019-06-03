import React, { Component } from 'react';
import './searchbar.css'
import { MdSearch } from 'react-icons/md';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <form className="form-inline">
                    <div className="container">
                        <input type="text" className="form-control"></input>
                        <button type="submit" className="search-btn btn btn-success">Search <MdSearch /></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;