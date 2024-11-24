import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    title: "Google Cloud Fest 2019",
    subtitle: "Developer Student Clubs",
    date: "17 August 2019",
    time: "11 am",
    location: "B-207 Academic Block",
    image: "/api/placeholder/800/400",
    promotion: "Free Google Cloud goodies after completing 4 labs"
  },
  {
    title: "Android Study Jams",
    subtitle: "Developer Student Clubs",
    date: "20 August 2019",
    time: "2 pm",
    location: "Computer Lab 1",
    image: "/api/placeholder/800/400",
    promotion: "Learn Android Development"
  },
  {
    title: "Android Study Jams",
    subtitle: "Developer Student Clubs",
    date: "20 August 2019",
    time: "2 pm",
    location: "Computer Lab 1",
    image: "/api/placeholder/800/400",
    promotion: "Learn Android Development"
  },
  {
    title: "Android Study Jams",
    subtitle: "Developer Student Clubs",
    date: "20 August 2019",
    time: "2 pm",
    location: "Computer Lab 1",
    image: "/api/placeholder/800/400",
    promotion: "Learn Android Development"
  },
  {
    title: "Web Development Workshop",
    subtitle: "Developer Student Clubs",
    date: "25 August 2019",
    time: "10 am",
    location: "Seminar Hall",
    image: "/api/placeholder/800/400",
    promotion: "Hands-on experience with modern web technologies"
  }
];

const EventCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('right');
  const itemsToShow = 3;

  const nextSlide = useCallback(() => {
    if (!isTransitioning && startIndex + itemsToShow < events.length) {
      setIsTransitioning(true);
      setDirection('right');
      setStartIndex(prev => prev + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [startIndex, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning && startIndex > 0) {
      setIsTransitioning(true);
      setDirection('left');
      setStartIndex(prev => prev - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [startIndex, isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (startIndex + itemsToShow < events.length) {
        nextSlide();
      } else {
        setStartIndex(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, startIndex]);

  const visibleEvents = events.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className="relative min-h-screen bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-30 scale-110 transition-all duration-1000"
          style={{ backgroundImage: `url(${visibleEvents[0]?.image})` }}
        />
        <div className="absolute inset-0 bg-white" />
      </div>

      <div className="relative flex items-center">
        <div className="w-full px-4">
          <div 
            className="flex gap-4 transition-all duration-500 ease-out"
            style={{
              transform: `translateX(${isTransitioning ? (direction === 'right' ? '-2%' : '2%') : '0%'})`,
            }}
          >
            {visibleEvents.map((event, index) => (
              <div 
                key={startIndex + index}
                className={`w-1/3 min-w-[33.333%] transform transition-all duration-500
                  ${isTransitioning ? `scale-95 opacity-90` : 'scale-100 opacity-100'}
                `}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="relative rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-white/10 transition-all duration-500">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full aspect-[16/9] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 
                      ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}
                      style={{
                        transitionDelay: `${index * 100}ms`
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

                      <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm
                        transform transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20">
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
            className={`absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full 
              transform transition-all duration-300 hover:scale-110
              ${startIndex === 0 ? 'bg-white/5 text-white/20 scale-90' : 'bg-white/10 hover:bg-white/20 text-white'} 
              backdrop-blur-sm`}
          >
            <ChevronLeft className="w-6 h-6 transform transition-transform duration-300 group-hover:-translate-x-1" />
          </button>
          <button
            onClick={nextSlide}
            disabled={startIndex + itemsToShow >= events.length || isTransitioning}
            className={`absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full 
              transform transition-all duration-300 hover:scale-110
              ${startIndex + itemsToShow >= events.length ? 'bg-white/5 text-white/20 scale-90' : 'bg-white/10 hover:bg-white/20 text-white'} 
              backdrop-blur-sm`}
          >
            <ChevronRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: Math.ceil(events.length / itemsToShow) }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transform transition-all duration-300
                  ${Math.floor(startIndex / itemsToShow) === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 scale-100'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;