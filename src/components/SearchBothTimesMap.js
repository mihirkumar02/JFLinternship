import React, {Component} from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon
} from "react-google-maps";


import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";

class SearchBothTimes extends Component{
    render(){
        const {nightCoords, dayCoords, bothTimeDetails} = this.props;
        const coordsN = [];
        const coordsD = [];

        nightCoords[0].forEach(point => {
           coordsN.push({lat: point[1], lng: point[0]});     
        });

        dayCoords[0].forEach(point => {
          coordsD.push({lat: point[1], lng: point[0]});     
        });


        const MapWithAMarker = withScriptjs(withGoogleMap((props) => (
          <GoogleMap
            defaultZoom={12} defaultCenter={{lat: bothTimeDetails.latitude, lng: bothTimeDetails.longitude}}
          >
          <Marker 
            position={{ lat: bothTimeDetails.latitude, lng: bothTimeDetails.longitude}} 
            draggable={true}  
          />
          
          
          <Polygon 
            id="night" 
            style={{display: "none"}}
            visible={true} 
            paths={ coordsN } 
            editable= {true}
            defaultOptions={{
              fillColor: "black", 
              fillOpacity: "0.2",
              strokeColor: "red"
          }}/>

          
          <Polygon  
            id="day" 
            visible={true} 
            editable= {true}
            paths={ coordsD } 
            defaultOptions={{
              fillColor: "green", 
              fillOpacity: "0.2"
            }}/>

          </GoogleMap>
        )));

        return(
            <MapWithAMarker
              googleMapURL = {"https://maps.googleapis.com/maps/api/js?key=AIzaSyBSncveVBP1lyZZ6WPcvuHpAtDmfm-WZH4&v=3.exp&libraries=geometry,drawing,places"}
              loadingElement = {<div style={{ height: `100%` }} />}
              containerElement = {<div style={{ height: `75vh`, width: `50vw`, marginLeft: '12vw', marginTop: `10vh` }} />}
              mapElement = {<div style={{ height: `100%` }} />}
            />
        );

    }
  }

export default SearchBothTimes;


/*         <DrawingManager
            defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
            defaultOptions={{
              drawingControl: true,
              drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: [
                  google.maps.drawing.OverlayType.POLYGON
                ],
              },
              circleOptions: {
                fillColor: `#ffff00`,
                fillOpacity: 1,
                strokeWeight: 5,
                clickable: false,
                editable: true,
                zIndex: 1,
              },
            }}
          />

          */


          /*  <DrawingManager
            defaultDrawingMode={props.google.maps.drawing.OverlayType.POLYGON}
            defaultOptions={{
              drawingControl: true,
              drawingControlOptions: {
                position: props.google.maps.ControlPosition.TOP_CENTER,
                drawingModes: [props.google.maps.drawing.OverlayType.POLYGON]
              },
              polygonOptions: {editable:true}
            }}
          /> */
