import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";
import SearchBar from "../components/searchbar/searchbar";
import DataCard from "../components/datacard/datacard";
import Pagin from "../components/pagination/pagination";
import { Spinner } from "react-bootstrap";
import Axios from "axios";

class Movie extends Component {
  constructor() {
    super();
    this.state = { data: {}, loading: true, page: 1 };
  }

  componentDidMount() {
    const { page } = this.state;
    Axios.get(`https://tv-v2.api-fetch.website/movies/${page}`)
      .then(response => {
        this.setState({ data: response.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    const { page } = this.state;
    Axios.get(`https://tv-v2.api-fetch.website/movies/${page}`)
      .then(response => {
        this.setState({ data: response.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  incpage = () => {
    const { page } = this.state;
    this.setState({ loading: true, page: page + 1 });
  };

  decpage = () => {
    const { page } = this.state;
    if (page != 1) this.setState({ loading: true, page: page - 1 });
  };

  isLoadingorComponent = () => {
    if (this.state.loading) {
      return <Spinner animation="border" variant="success" />;
    } else {
      const { data } = this.state;
      return (
        <div className="row">
          {data.map(item => {
            return (
              <div className="col-3">
                <DataCard data={item} />
              </div>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const { page } = this.state;
    return (
      <div>
        <Navbar />
        <h1 style={{ textAlign: "center" }}>Movie</h1>
        <SearchBar />
        <Pagin previous={this.decpage} next={this.incpage} page={page} />
        <div className="container">{this.isLoadingorComponent()}</div>
      </div>
    );
  }
}

export default Movie;
