import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./UserMap.css";
const UserMap = ({ countries }) => {
  const mapStyle = {
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.NAME_1;
    const confirmedText = country.properties.confirmedText;
    layer.bindPopup(`${name} ${confirmedText}`);
  };

  return (
    <MapContainer style={{ height: "60vh" }} zoom={4} center={[20.59, 78.96]} attributionControl={false}  >
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};

export default UserMap;