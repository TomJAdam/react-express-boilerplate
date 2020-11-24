import React, { Component } from "react";
import { readEnv } from "read-env";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import axios from "axios";

const mapStyles = {
  width: 250,
  height: 300,
  borderRadius: "8px",
  boxShadow: "0px 2px 5px 0.5px #E3E3E3",
};

export class GoogleMap extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 48.43699935,
          lng: -123.36036146782024,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"Toms house"} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCyMLV15CqMzB846p53qsoJP6g7d471hpo",
})(GoogleMap);
