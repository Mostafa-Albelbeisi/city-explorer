import React from "react";
import axios from "axios";

class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cityName: "",
            longitudeAPI: "",
            latitudeAPI: "",
          
        }
    }

    getWeatherData = async(event) => {
        const cityWeather = event.target.weather.value;
        const URL = `http://localhost:3001/weather?name=${cityWeather}`;
        console.log(URL);

        try {
            let result = await axios.get(URL);
            this.setState({
                cityName: result.data[0].city_name,
                longitudeAPI: result.data[0].lon,
                latitudeAPI: result.data[0].lat
            })
            console.log(result.data, "")
            
        } catch  {
            
        }
    }

    
    render(){
        return(
            <div>
                <form onSubmit={this.getWeatherData} >
            <input type='text' name='weather' placeholder="Search" />
            <button type='submit'>Search</button>
        </form>

        <h3>City: {this.state.cityName}</h3>
        <h5>Longitude From API: {this.state.longitudeAPI}</h5>
        <h5>Latitude From API: {this.state.latitudeAPI}</h5>
            </div>
        )
    }
    
}
export default Weather;

