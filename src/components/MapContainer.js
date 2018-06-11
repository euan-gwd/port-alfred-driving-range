import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export const MapComponent = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -33.600295, lng: 26.860043 }}
    >
      <Marker position={{ lat: -33.600295, lng: 26.860043 }} />
    </GoogleMap>
  ))
);
