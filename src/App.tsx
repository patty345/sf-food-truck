import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import truckSites from "./data/truck-sites.json";

function App() {
  // const filteredTruck = truckSites.filter(truck => truck.applicant === "Datam SF LLC dba Anzu To You")

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
        >
          <Popup position={[+truck.location.latitude, +truck.location.longitude]}>
          <div>
            <h2>{"Name: " + truck.applicant}</h2>
            <p>{"Food: " + truck.fooditems}</p>
            <p>{"Address: " + truck.address}</p>
          </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default App;
