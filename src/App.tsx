import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import truckSites from "./data/truck-sites.json";
import Searchbox from "./Searchbox";

function App() {
  const filteredTruck = truckSites.filter(
    (truck) => truck.status === "APPROVED" && "REQUESTED"
  );

  return (
    <div style={{border: "2px solid black", display: "flex", flexDirection: "row"}}>
      <div style={{ border: "2px sold black", width: "50vw" }}>
        <Searchbox />
      </div>
      {/* // SF map */}
      <MapContainer
        center={[37.774929, -122.419418]}
        zoom={13}
        scrollWheelZoom={true} style={{border: "2px solid black", width: "50vw"}}
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
            <Popup
              position={[+truck.location.latitude, +truck.location.longitude]}
            >
              <div>
                <h2>{"Name: " + truck.applicant}</h2>
                <p>{"Food: " + truck.fooditems}</p>
                <p>{"Address: " + truck.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
