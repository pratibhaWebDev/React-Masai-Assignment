import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrentLocation from "./hooks/useCurrentLocation";
import useGeofence from "./hooks/useGeofence";
import MapComponent from "./components/MapComponent";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";

const GEOFENCE_CENTER = [28.6139, 77.2090]; 
const GEOFENCE_RADIUS = 1000; 

function App() {
  const [count, setCount] = useState(0)
  const currentLocation = useCurrentLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [destination, setDestination] = useState(null);

  useGeofence(currentLocation, GEOFENCE_CENTER, GEOFENCE_RADIUS);


  const markers = useMemo(() => {
    const allMarkers = [];
    if (currentLocation) allMarkers.push({ position: currentLocation, label: "You" });
    if (destination) allMarkers.push({ position: destination, label: "Destination" });
    return allMarkers;
  }, [currentLocation, destination]);


  const handleSearch = useCallback((query) => {
    setSearchQuery(query);

    if (query.toLowerCase() === "delhi") {
      setDestination([28.6139, 77.2090]);
    }
  }, []);

  return (
    <>
     <div style={{ height: "100vh", width: "100vw" }}>
      <SearchBar onSearch={handleSearch} />

      {currentLocation ? (
        <MapComponent center={currentLocation} markers={markers} />
      ) : (
        <div>Loading map...</div>
      )}

      {currentLocation && (
        <WeatherInfo lat={currentLocation[0]} lon={currentLocation[1]} />
      )}
    </div>
    </>
  )
}

export default App
