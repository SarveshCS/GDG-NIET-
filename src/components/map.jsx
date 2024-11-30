import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Calendar, Users, Globe } from 'lucide-react';

const CollegeMap = () => {
  const mapRef = useRef(null);
  const [mapError, setMapError] = useState(null);

  const gdscInfo = {
    collegeName: "Noida Institute of Engineering and Technology (NIET, Greater Noida)",
    chapterName: "Noida Institute of Engineering and Technology (NIET, Greater Noida",
    address: "",
    coordinates: { lat: 28.463111779497158, lng: 77.49078985504053 }, 
    leadName: "Anusha Tiwari",
    memberCount: 150,
    foundedYear: 2020,
    website: "https://gdsc.community.dev/xyz-college-of-engineering/",
    upcomingEvents: [
      { name: "Android Study Jam", date: "2024-03-15" },
      { name: "Cloud Study Jam", date: "2024-03-22" },
      { name: "Web Development Workshop", date: "2024-04-05" },
    ]
  };

  useEffect(() => {
    if (!mapRef.current) {
      setMapError("Map container not found");
      return;
    }

    let map = null;

    try {
      map = L.map(mapRef.current).setView([gdscInfo.coordinates.lat, gdscInfo.coordinates.lng], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const customIcon = L.icon({
        iconUrl: '/marker.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      L.marker([gdscInfo.coordinates.lat, gdscInfo.coordinates.lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(`${gdscInfo.chapterName}<br>${gdscInfo.address}`)
        .openPopup();

      console.log("Map initialized successfully");
    } catch (error) {
      console.error("Error initializing map:", error);
      setMapError(`Error initializing map: ${error instanceof Error ? error.message : String(error)}`);
    }

    return () => {
      if (map) {
        map.remove();
        console.log("Map removed");
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Panel */}
      <div className="w-96 bg-white shadow-lg p-8 overflow-y-auto">
        <div className="space-y-6">
          {/* Chapter Info */}
          <div>
            <h1 className="text-2xl font-bold text-blue-600">{gdscInfo.chapterName}</h1>
            <p className="text-gray-600 mt-1">{gdscInfo.collegeName}</p>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="mr-2" size={16} />
              <p className="text-sm">{gdscInfo.address}</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center space-x-6 py-4 border-y border-gray-100">
            <div className="flex items-center">
              <Users className="text-blue-600 mr-2" size={16} />
              <span className="text-sm">{gdscInfo.memberCount} Members</span>
            </div>
            <div>
              <span className="text-sm">Est. {gdscInfo.foundedYear}</span>
            </div>
          </div>

          {/* Events */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Upcoming Events</h2>
            <div className="space-y-3">
              {gdscInfo.upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center text-sm">
                  <Calendar className="text-blue-600 mr-2" size={16} />
                  <span>{event.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Website Link */}
          <a 
            href={gdscInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <Globe className="mr-2" size={16} />
            <span className="text-sm">Visit GDSC Website</span>
          </a>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative">
        {mapError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-red-500">
            {mapError}
          </div>
        ) : (
          <div ref={mapRef} className="absolute inset-0"></div>
        )}
      </div>
    </div>
  );
};

export default CollegeMap;

