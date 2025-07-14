import { useEffect, useState } from "react";

export default function useCurrentLocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation([latitude, longitude]);
      },
      (err) => console.error(err),
      { enableHighAccuracy: true }
    );
  }, []);

  return location;
}
