import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './GymLocations.css'; // Add styling if needed

const containerStyle = {
  width: '100%',
  height: '500px',
  margin: '20px auto',
};

const center = {
  lat: 40.7128, // Default center (Example: New York City)
  lng: -74.0060,
};

// Sample gym locations (Add real locations if available)
const gymLocations = [
  { id: 1, name: 'Gym 1', position: { lat: 40.7128, lng: -74.0060 } },
  { id: 2, name: 'Gym 2', position: { lat: 40.7306, lng: -73.9352 } },
  { id: 3, name: 'Gym 3', position: { lat: 40.7580, lng: -73.9855 } },
];

const GymLocations = () => {
  return (
    <div className="gym-locations">
      <h2>Our Gym Locations</h2>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> {/* Replace with your API Key */}
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {gymLocations.map((gym) => (
            <Marker key={gym.id} position={gym.position} label={gym.name} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GymLocations;
