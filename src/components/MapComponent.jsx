import React from "react";
import { Map } from "react-map-gl/maplibre";
import { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const position = { latitude: 17.42217696669292, longitude: 78.33295647893266 };

const MAP_STYLE =
  "https://api.maptiler.com/maps/hybrid/style.json?key=GoPEmN7aj8VWs35YwdIp"; // Get a free key at maptiler.com

const MapComponent = () => (
  <div
    style={{
      width: "100%",
      height: "400px",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0,0,0,1.0)",
    }}
  >
    <Map
      initialViewState={{
        latitude: position.latitude,
        longitude: position.longitude,
        zoom: 15,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle={MAP_STYLE}
    >
      <Marker
        latitude={position.latitude}
        longitude={position.longitude}
        color="red"
      />
    </Map>
  </div>
);

export default MapComponent;
