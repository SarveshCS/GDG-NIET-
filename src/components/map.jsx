import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Calendar, Users, Globe } from 'lucide-react';

const CollegeMap = () => {
  const mapRef = useRef(null);
  const [mapError, setMapError] = useState(null);

  const gdscInfo = {
    collegeName: "Noida Institute of Engineering and Technology (NIET, Greater Noida)",
    chapterName: "Noida Institute of Engineering and Technology (NIET, Greater Noida",
    address: "",
    coordinates: { lat: 28.463111779497158, lng: 77.49078985504053 },
    leadName: "Vanshika pandey",
    memberCount: 2000,
    foundedYear: 2020,
    website: "https://gdg.community.dev/gdg-on-campus-noida-institute-of-engineering-and-technology-greater-noida-india/",
    upcomingEvents: [
      { name: "None", date: "" },
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

    } catch (error) {
      console.error("Error initializing map:", error);
      setMapError(`Error initializing map: ${error instanceof Error ? error.message : String(error)}`);
    }

    return () => {
      if (map) map.remove();
    };
  }, []);

  return (
    <><div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Info Panel */}
      <div className="w-full lg:w-1/3 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h1 className="text-2xl font-semibold text-gray-800">{gdscInfo.chapterName}</h1>
          <p className="text-gray-500 mt-2 text-sm">{gdscInfo.collegeName}</p>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Users className="text-blue-500" size={20} />
              <span className="text-gray-600">{gdscInfo.memberCount} Members</span>
            </div>
            <div className="text-gray-500 text-sm">
              Founded {gdscInfo.foundedYear}
            </div>
          </div>
        </div>

        {/* Events Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {gdscInfo.upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-600">
                <Calendar className="text-blue-500" size={18} />
                <span className="text-sm">{event.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Website Link */}
        <a
          href={gdscInfo.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
        >
          <Globe size={18} />
          <span className="text-sm font-medium">Visit GDSC Website</span>
        </a>
      </div>

      {/* Map Area */}
      <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 min-h-[500px] z-10">
        {mapError ? (
          <div className="h-full flex items-center justify-center text-red-500 p-4 text-center">
            {mapError}
          </div>
        ) : (
          <div ref={mapRef} className="h-full w-full"></div>
        )}
      </div>
    </div>
    </>
  );
};

export default CollegeMap;
