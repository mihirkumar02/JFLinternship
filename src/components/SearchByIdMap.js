import React, {Component} from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon,
  DrawingManager 
} from "react-google-maps";


class SearchByIdMap extends Component{
    render(){
        const {outletCoords, outletDetails, outletProperties} = this.props;
        const coords = [];

        const timeTag = outletProperties.timeTag;
        //const polygonCoords = Array.from(outletCoords[0]);
        //console.log(polygonCoords);

        var fillColor = "";
        var fillOpacity = "";

        if(timeTag === "DAY"){
          fillColor = "blue";
          fillOpacity = "0.2";
        } else if(timeTag === "NIGHT"){
          fillColor = "yellow";
          fillOpacity = "0.4";
        }

        outletCoords[0].forEach(point => {
           coords.push({lat: point[1], lng: point[0]});     
        });

        const MapWithAMarker = withScriptjs(withGoogleMap((props) => (
          <GoogleMap
            defaultZoom={12} defaultCenter={{lat: outletDetails.latitude, lng: outletDetails.longitude}}
          >
          <Marker 
            position={{ lat: outletDetails.latitude, lng: outletDetails.longitude}} 
            draggable={true}  
          />
          
          
          <Polygon  
            visible={true} 
            paths={ coords } 
            defaultOptions={{
              fillColor: fillColor, 
              fillOpacity: fillOpacity,
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

export default SearchByIdMap;


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
