import { useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const libraries = ["marker"];

const MapContainer = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  // Replace with your business coordinates
  const businessLocation = {
    lat: 4.78897,
    lng: 7.056341,
  };

  const mapStyles = {
    height: "400px",
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px 0",
    border: "1px solid #ddd",
    transition: "box-shadow 0.3s ease",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC0ocwRx_SkaHcx6QnTKN9cjrpYg35--ng",
    libraries: libraries,
  });

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      // Create AdvancedMarkerElement when map is loaded
      const { AdvancedMarkerElement } = window.google.maps.marker;

      markerRef.current = new AdvancedMarkerElement({
        map: mapRef.current,
        position: businessLocation,
        title: "Your Business Name",
      });
    }

    return () => {
      if (markerRef.current) {
        markerRef.current.map = null;
      }
    };
  }, [isLoaded]);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={15}
      center={businessLocation}
      onLoad={(map) => (mapRef.current = map)}
    />
  );
};

export default MapContainer;
