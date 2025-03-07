import React, { useState, useEffect, useCallback } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const events = [
  {
      image: "/images/events/GEN_AI-Study_Jams_2025_Swags_Distribution/GEN_AI-Study_Jams_2025_Swags_Distribution-main.jpg",
  },
  {
      image: "/images/events/innova_2024/INNOVA_2024-main.jpg",
  },
  {
      image: "/images/events/Google_Women_Engineers_Program_Cohort_6-2024/Google_Women_Engineers_Program_Cohort_6-2024-main.jpg",
  },
  {
      image: "/images/events/GDG_Orientation_2024-25-Second_Year/GDG_Orientation_2024-25-Second_Year-main.jpg",
  },
  {
      image: "/images/events/GDG_Orientation_2024-25-First_Year/GDG_Orientation_2024-25-First_Year-main.jpg",
  },
  {
      image: "/images/events/Devfest_2023-New_Delhi/Devfest_2023-New_Delhi-main.jpg",
  },
  {
      image: "/images/events/Google_Cloud_Study_Jams_2023_Swags_Distribution/Google_Cloud_Study_Jams_2023_Swags_Distribution-main.jpg",
  },
  {
      image: "/images/events/Google_Cloud_Study_Jams_2023/Google_Cloud_Study_Jams_2023-main.jpg",
  },
  {
      image: "/images/events/GDSC_Orientation_2023-24/GDSC_Orientation_2023-24-main.jpg",
  },
  {
      image: "/images/events/Google_Cloud_Study_Jams_2022/Google_Cloud_Study_Jams_2022-main.jpg",
  },
  {
      image: "/images/events/Build_With_AI/Build_With_AI-main.png",
  },
  {
      image: "/images/events/Development_for_Collegiate_Women_in_Tech/Development_for_Collegiate_Women_in_Tech-main.jpg",
  },
  {
      image: "/images/events/Git_and_GitHub_Workshop/Git_and_GitHub_Workshop-main.jpg",
  },

];

const EventCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("right");

  const itemsToShow =
    window.innerWidth <= 640 ? 1 : window.innerWidth <= 1024 ? 2 : 3;

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
                  isTransitioning
                    ? direction === "right"
                      ? "-2%"
                      : "2%"
                    : "0%"
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
                      className="w-full aspect-[4/3] sm:aspect-[16/9] object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0"></div>
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
              disabled={
                startIndex + itemsToShow >= events.length || isTransitioning
              }
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
