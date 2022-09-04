import React from "react";
import WeatherDay from "./WeatherDay";


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: this.props.weather,
    };
  }

  render() {
    return (
        <table>
          <tr>
            <th>Date</th>
            <th>Forecast</th>
          </tr>
          {this.props.weather.map((day) => (
            <tr>
              <WeatherDay day={day} />
            </tr>
          ))}
        </table>
    );
  }
}
export default Weather;