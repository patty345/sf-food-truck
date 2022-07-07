import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import truckSites from "./data/truck-sites.json";

function App() {
  const filteredTruck = truckSites.filter(truck => truck.status === "APPROVED")

  return (
    <MapContainer
      center={[37.774929, -122.419418]}
      zoom={13}
      scrollWheelZoom={true}
    >
      {/* adding title layer */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filteredTruck.map((truck) => (
        // display of marker in the center
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
