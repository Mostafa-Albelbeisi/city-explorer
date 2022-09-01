// import React from "react";
// import axios from "axios";
// import Weather from "./Components/Weather";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display_name: "",
//       lat: "",
//       lon: "",
//       errFlag: false,
//       mapFlag: false,
//       zoom: 18,
//     };
//   }

//   getLocationData = async (event) => {
//     event.preventDefault();
//     const cityName = event.target.city.value;
//     //send request to the third party
//     const key = "pk.7aedc85ff3620b0d3b6865ccab5efd25";
//     const URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json&zoom=${this.state.zoom}`;

//     try {
//       let resResult = await axios.get(URL);
//       this.setState({
//         display_name: resResult.data[0].display_name,
//         lat: resResult.data[0].lat,
//         lon: resResult.data[0].lon,
//         mapFlag: true,
//       });
//     } catch {
//       console.log("err");
//       this.setState({
//         errFlag: true,
//       });
//     }
//   };
//   zoomIn = () => {
   
//       this.setState({
//         zoom: this.state.zoom + 1,
//       });
    
//   };
//   zoomOut = () => {
   
//       this.setState({
//         zoom: this.state.zoom - 1,
//       });
    
//   };
//   render() {
//     return (
//       <div>
//         <h1>City Explore</h1>
//         <form onSubmit={this.getLocationData}>
//           <input type="text" name="city" placeholder="Enter a city" />
//           <button type="submit">Submit</button>
//         </form>

//         <h3>Display name : {this.state.display_name}</h3>
//         <p>Lon : {this.state.lon}</p>
//         <p>Lat : {this.state.lat}</p>

//         {this.state.mapFlag && (
//           <img
//             src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.state.lat},${this.state.lon}&zoom=${this.state.zoom}`}
//           ></img>
//         )}
//         {this.state.errFlag && <h4>Error : sorry something went wrong!</h4>}
//         {this.state.mapFlag && <button onClick={this.zoomIn}>Zoom In</button>}
//         {this.state.mapFlag && <button onClick={this.zoomOut}>Zoom Out</button>}
//         <Main/>
//       </div>
//     );
//   }
// }

// export default App;



import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

class App extends React.Component{
    
render(){
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/> 
        </div>
    )
}
}

export default App;
