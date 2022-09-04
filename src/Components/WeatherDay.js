
import React from "react";

class WeatherDay extends React.Component {
  render() {
    return (
        <>
        <td>{this.props.day.date}</td>
        <td>{this.props.day.description}</td>
        </>
    );
  }
}

export default WeatherDay;