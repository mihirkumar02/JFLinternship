import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon,
} from "react-google-maps";

const coords = [
    {lat: 29.047487,lng: 41.023164},
    {lat: 29.0459633,lng: 41.0212904},
    {lat: 29.0449333,lng: 41.0167573},
    {lat: 29.0393543,lng: 41.0106695},
    {lat: 29.032917,lng: 41.0049697},
    {lat: 29.0226173,lng: 41.0061356},
    {lat: 29.0078545,lng: 41.0039334},
    {lat: 29.0201283,lng: 40.9765933},
    {lat: 29.0319729,lng: 40.9657708},
    {lat: 29.0784073,lng: 40.9536501},
    {lat: 29.0944576,lng: 40.9493068},
    {lat: 29.0975475,lng: 40.9514461},
    {lat: 29.1052294,lng: 40.9647986},
    {lat: 29.097338,lng: 40.978242},
    {lat: 29.0931273,lng: 40.9835914},
    {lat: 29.0858746,lng: 40.987738},
    {lat: 29.056509,lng: 40.998902},
    {lat: 29.061456,lng: 41.008443},
    {lat: 29.0617561,lng: 41.0104752},
    {lat: 29.0595245,lng: 41.0126772},
    {lat: 29.052014,lng: 41.018198},
    {lat: 29.047487,lng: 41.023164}];
    

const AddStoreMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBSncveVBP1lyZZ6WPcvuHpAtDmfm-WZH4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{lat: 12.97244, lng: 77.580}}>
      <Marker position={{ lat: 12.97244, lng: 77.580}} />
      <Polygon visible={true} paths={ coords }/>
  </GoogleMap>
));

export default AddStoreMap;


/*import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

class AddStoreMap extends Component {

    
    
    render(){

        return(
            <Map
                google={this.props.google}
                zoom={8}
                initialCenter={{lat: 12.97244, lng: 77.580}}
            >
                <InfoWindow
                    visible={this.showingInfoWindow}>                
                </InfoWindow>
                <Marker position={{ lat: 12.97244, lng: 77.580}} />
                <Marker position={{ lat: 12.971389, lng: 77.750130}} />
                <Marker position={{ lat: 12.934533, lng: 77.626579}} />
            </Map>

           
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBSncveVBP1lyZZ6WPcvuHpAtDmfm-WZH4'
})(AddStoreMap);
*/