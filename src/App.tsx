import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./App.css";
import truckSites from "./data/truck-sites.json";

function App() {
  // const filteredTruck = truckSites.filter(truck => truck.)

  return (
    <MapContainer
      center={[37.774929, -122.419418]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {truckSites.map((truck) => (
        <Marker
          key={truck.objectid}
          
          position={[+truck.location.latitude, +truck.location.longitude]}
        />
      ))}
    </MapContainer>
  );
}

export default App;
