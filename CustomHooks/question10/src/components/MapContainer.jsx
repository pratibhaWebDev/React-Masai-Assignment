// MapContainer.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ position }) => (
  <MapContainer center={position} zoom={13} style={{ height: "100vh" }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>Your Current Location</Popup>
    </Marker>
  </MapContainer>
);
