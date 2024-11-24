import React, { useState, useEffect, useCallback } from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const events = [
  {
    title: "Google Cloud Fest 2019",
    subtitle: "Developer Student Clubs",
    date: "17 August 2019",
    time: "11 am",
    location: "B-207 Academic Block",
    image: "/placeholder.svg?height=400&width=800",
    promotion: "Free Google Cloud goodies after completing 4 labs"
  },
  {
    title: "Android Study Jams",
    subtitle: "Developer Student Clubs",
    date: "20 August 2019",
    time: "2 pm",
    location: "Computer Lab 1",
    image: "/placeholder.svg?height=400&width=800",
    promotion: "Learn Android Development"
  },
  {
    title: "Web Development Workshop",
    subtitle: "Developer Student Clubs",
    date: "25 August 2019",
    time: "10 am",
    location: "Seminar Hall",
    image: "/placeholder.svg?height=400&width=800",
    promotion: "Hands-on experience with modern web technologies"
  }
];

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-8 py-8 overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)`, width: '300%' }}
      >
        {events.map((event, index) => (
          <div key={index} className="w-1/3 px-2 flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
              <img
                src={event.image}
                alt={event.title}
                className="w-full object-cover aspect-[2/1]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                {event.subtitle && (
                  <div className="text-sm font-medium mb-2">{event.subtitle}</div>
                )}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h2>
                <div className="grid gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                {event.promotion && (
                  <div className="mt-4 p-2 bg-white/20 rounded-md text-sm">
                    {event.promotion}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-200"
        aria-label="Previous event"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-200"
        aria-label="Next event"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default EventCarousel;
