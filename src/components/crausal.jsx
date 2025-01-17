import React, { useState, useEffect, useCallback } from "react";
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    title: "Web Development Workshop",
    subtitle: "Developer Student Clubs",
    date: "17 August 2024",
    time: "11 am",
    location: "Tech Hub - Room 207",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    promotion: "Learn modern web development techniques"
  },
  {
    title: "AI/ML Bootcamp",
    subtitle: "Tech Innovation Lab",
    date: "20 August 2024",
    time: "2 pm",
    location: "Data Science Center",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    promotion: "Hands-on machine learning workshop"
  },
  {
    title: "Cybersecurity Summit",
    subtitle: "Security Research Group",
    date: "25 August 2024",
    time: "10 am",
    location: "Virtual Conference Hall",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    promotion: "Expert insights on digital security"
  },
  {
    title: "Mobile App Development",
    subtitle: "App Creators Club",
    date: "28 August 2024",
    time: "1 pm",
    location: "Innovation Lab",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    promotion: "Build your first mobile app"
  },
  {
    title: "Cloud Computing Workshop",
    subtitle: "Cloud Tech Community",
    date: "30 August 2024",
    time: "3 pm",
    location: "Cloud Learning Center",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    promotion: "Master cloud technologies"
  }
];

const EventCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("right");

  const itemsToShow = window.innerWidth <= 640 ? 1 : window.innerWidth <= 1024 ? 2 : 3;

  const nextSlide = useCallback(() => {
    if (!isTransitioning && startIndex + itemsToShow < events.length) {
      setIsTransitioning(true);
      setDirection("right");
      setStartIndex((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [startIndex, isTransitioning, itemsToShow]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning && startIndex > 0) {
      setIsTransitioning(true);
      setDirection("left");
      setStartIndex((prev) => prev - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [startIndex, isTransitioning]);

  useEffect(() => {
    const handleResize = () => setStartIndex(0); // Reset carousel on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (startIndex + itemsToShow < events.length) {
        nextSlide();
      } else {
        setStartIndex(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, startIndex, itemsToShow]);

  const visibleEvents = events.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className="relative bg-white space-y-20 overflow-hidden max-w-full">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-30 scale-110 transition-all duration-1000"
          style={{ backgroundImage: `url(${visibleEvents[0]?.image})` }}
        />
        <div className="absolute inset-0 bg-white" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center overflow-hidden">
          <div className="w-full">
            <div
              className="flex gap-4 transition-all duration-500 ease-out"
              style={{
                transform: `translateX(${
                  isTransitioning ? (direction === "right" ? "-2%" : "2%") : "0%"
                })`,
              }}
            >
              {visibleEvents.map((event, index) => (
                <div
                  key={startIndex + index}
                  className="flex-none w-full sm:w-1/3 min-w-full sm:min-w-[33.333%] lg:min-w-[25%] transform transition-all duration-500"
                  style={{
                    flex: `1 1 ${100 / itemsToShow}%`, // Ensure dynamic sizing
                  }}
                >
                  <div className="relative rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-white/10 transition-all duration-500">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full aspect-[4/3] sm:aspect-[16/9] object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 ${
                          isTransitioning ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                        }`}
                        style={{
                          transitionDelay: `${index * 100}ms`,
                        }}
                      >
                        <p className="text-sm font-medium text-white/80 mb-2 transform transition-all duration-300 group-hover:-translate-y-1">
                          {event.subtitle}
                        </p>
                        <h2 className="text-2xl font-bold mb-4 tracking-tight transform transition-all duration-300 group-hover:-translate-y-1">
                          {event.title}
                        </h2>
                        <div className="space-y-2 text-sm mb-4 transform transition-all duration-300 group-hover:-translate-y-1">
                          <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm transform transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20">
                          {event.promotion}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={startIndex === 0 || isTransitioning}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/70 p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              disabled={startIndex + itemsToShow >= events.length || isTransitioning}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/70 p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        {/* Your next component goes here */}
        <NextComponent />
      </div>
    </div>
  );
};

const NextComponent = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
      {/* Add your content here */}
      <p>Here are some upcoming events you might be interested in.</p>
    </div>
  );
};

export default EventCarousel;
