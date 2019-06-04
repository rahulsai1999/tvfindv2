import React, { Component } from "react";
import "./datacard.css";

class DataCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { data } = this.props;
    if (data["Type"]) {
      return (
        <div className="datacard">
          <div className="row">
            <div className="col">
              <img
                className="datacard-img"
                alt="poster"
                src={
                  data["Poster"] === "N/A"
                    ? "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                    : data["Poster"]
                }
              />
            </div>
            <div className="col">
              <div className="row">
                <h5>{data["Title"]}</h5>
              </div>
              <div className="row">
                <h6>{data["Year"]}</h6>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card">
          <div className="poster">
            <img src={data.images.poster} alt="poster"/>
          </div>
          <div className="details">
            <h2>{data.title}</h2><span>{data.year}</span>
            <div className="rating">

            </div>
            <div className="tags">

            </div>
            <div className="info">
              <p>{data.synopsis}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default DataCard;
