import React from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import Weather from "./Weather";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      lat: "",
      lon: "",
      zoom: 18,
      errorMsg: false,
      mapImg: false,
      Weather: [],
    };
  }

    getLocationData = async (event) => {
      event.preventDefault();
      const cityName = event.target.city.value;
      const URL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_MAP_KEY}&q=${cityName}&format=json&zoom=${this.state.zoom}`;

      try {
        let resResult = await axios.get(URL);
        this.setState({
          cityName: resResult.data[0].display_name,
          lat: resResult.data[0].lat,
          lon: resResult.data[0].lon,
          mapImg: true,
          errorMsg: false,
        });
        this.getWeatherData (resResult.data[0].lat, resResult.data[0].lon);
      } catch {
        this.setState({
          errorMsg: true,
        });
      }
    };
    getWeatherData  = async (lat, lon) => {
      try {
        let resResult = await axios.get(
          `${process.env.REACT_APP_URL}/weather?lat=${lat}&lon=${lon}`
        );
        this.setState({
          weather: resResult.data,
          errorMsg: false,
        });
      } catch {
        this.setState({
          errorMsg: true,
        });
      }
    };
    zoomIn = () => {
      if (this.state.zoom < 18) {
        this.setState({
          zoom: this.state.zoom + 1,
        });
      }
    };
    zoomOut = () => {
      if (this.state.zoom > 0) {
        this.setState({
          zoom: this.state.zoom - 1,
        });
      }
  }

   render() {
    return(
      <div>
      <br></br>
      <br></br>

      <br></br>

      <form onSubmit={this.getLocationData}>
        <input type="text" name="city" placeholder="Enter a city" />
        <button type="submit">Explore!</button>
      </form>
      <br></br>
      <br></br>
      <br></br>

     
      {this.state.mapImg && <Card style={{ width: "40rem" }}>
        
        {this.state.mapImg && (
          <Card.Img
            variant="top"
            src={`https://maps.locationiq.com/v3/staticmap?key=pk.1c9bb206af5e67499ccb1c24d7dc1d11&center=${this.state.lat},${this.state.lon}&zoom=${this.state.zoom}`}
          />
        )}
        <Card.Body>
          {this.state.mapImg && (
            <button onClick={this.zoomIn}>Zoom In</button>
          )}
          <span> </span>

          {this.state.mapImg && (
            <button onClick={this.zoomOut}>Zoom Out</button>
          )}
          <Card.Title>Name {this.state.cityName}</Card.Title>
        </Card.Body>
        <ListGroup>
          <ListGroup.Item>Latitude: {this.state.lat}</ListGroup.Item>
          <ListGroup.Item>Longitude: {this.state.lon}</ListGroup.Item>
          <Weather weather = {this.state.weather}/>

        </ListGroup>
        {this.state.errorMsg &&<Card.Body>
           (
            <h4>Error : sorry something went wrong!</h4>
          )
        </Card.Body>}
      </Card>}
    </div>
    );
   }
  }


export default Main;
