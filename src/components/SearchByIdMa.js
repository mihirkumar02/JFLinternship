import React, {Component} from "react";

import {Map, Marker, GoogleApiWrapper, Polygon, DrawingManager} from 'google-maps-react';
    
class SearchByIdMap extends Component {

  
  render(){
    const mapStyle = {
      width: "70%",
      height: "auto",
      marginBottom: "10vh",
      marginLeft: "10vw"
    }

    const {outletCoords, outletDetails} = this.props;
    const coords = [];


 //const polygonCoords = Array.from(outletCoords[0]);

 //console.log(polygonCoords);
   outletCoords[0].forEach(point => {
      coords.push({lat: point[1], lng: point[0]});     
   });


    return(
      <Map
          google={this.props.google}
          zoom={13}
          initialCenter={{lat: 28.75, lng: 77.17130710446463}}
          style={mapStyle}
      >
          <Polygon visible={true} paths={coords} />
          <Marker position={{ lat: outletDetails.latitude, lng: outletDetails.longitude}} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSncveVBP1lyZZ6WPcvuHpAtDmfm-WZH4'
})(SearchByIdMap);
    

/*const SearchByIdMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBSncveVBP1lyZZ6WPcvuHpAtDmfm-WZH4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(movie => (
  <GoogleMap defaultZoom={8} defaultCenter={{lat: 12.97244, lng: 77.580}}>
      <Marker position={{ lat: 12.97244, lng: 77.580}} />
      <Polygon visible={true} paths={ coords }/>
  </GoogleMap>
));

export default SearchByIdMap;
*/