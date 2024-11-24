import React from 'react';
import { MapPin, Calendar, Users, Globe } from 'lucide-react';

const CollegeMap = () => {
  const gdscInfo = {
    collegeName: "XYZ College of Engineering",
    chapterName: "GDSC XYZ College",
    address: "123 College Road, Tech City, IN 123456",
    coordinates: { lat: 28.462036552708618, lng: 77.46279832551544 },
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
        <img
          src="/api/placeholder/1920/1080"
          alt={`Map of ${gdscInfo.collegeName}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <MapPin size={24} className="text-blue-600" />
          </div>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${gdscInfo.coordinates.lat},${gdscInfo.coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-50 transition-colors text-sm"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default CollegeMap;