import { useEffect } from "react";

export default function useGeofence(currentLocation, targetArea, radius) {
  useEffect(() => {
    if (!currentLocation) return;

    const [lat1, lon1] = currentLocation;
    const [lat2, lon2] = targetArea;

    const distance = Math.sqrt((lat2 - lat1) ** 2 + (lon2 - lon1) ** 2) * 111000; // Rough meters

    if (distance < radius) {
      alert("You’ve entered the geofenced area!");
    }
  }, [currentLocation]);
}
