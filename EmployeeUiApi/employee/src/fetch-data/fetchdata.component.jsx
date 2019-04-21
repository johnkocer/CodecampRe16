import React, { Component } from "react";
import { FetchDataService } from "./fetchdata.service";

class FetchDataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.getWeatherForecasts();
  }

  getWeatherForecasts() {
    FetchDataService.getWeatherForecasts()
      .then(res => {
        this.setState({
          data: res
        });
        console.dirxml(this.state.data);
      })
      .catch(error => {
        console.log("There is an error in Get API call.");
      });
  }

  render() {
    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => (
              <tr key={index}>
                <td>{item.dateFormatted}</td>
                <td>{item.temperatureC}</td>
                <td>{item.temperatureF}</td>
                <td>{item.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FetchDataComponent;
