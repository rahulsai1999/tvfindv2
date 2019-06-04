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
        <div className="card">
          <div className="poster">
              <img
                className="datacard-img"
                alt="poster"
                src={
                  data["Poster"] === "N/A"
                    ? "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                    : data["Poster"]
                }
              />
            <div className="details">
                <h5>{data["Title"]}({data["Year"]})</h5>
              <div className="info">
                
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
            <h5 className="title">{data.title} ({data.year})</h5>
            <br/>
            <div className="info">
              {/* <p>{data.synopsis.substring(0,165)+"..."}</p> */}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default DataCard;
