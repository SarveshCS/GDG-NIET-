import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ChevronRight,
  Search,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const EventsPage = () => {
  const [selectedTab, setSelectedTab] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = {
    upcoming: [],
    past: [
      {
        id: 1,
        title: "Google Cloud Study Jams 2022",
        date: "2022",
        time: "9:00 AM - 6:00 PM",
        location: "NIET campus",
        description:
          "An earlier edition of the hands-on workshop series to learn and apply Google Cloud technologies.",
        image:
          "/images/events/Google_Cloud_Study_Jams_2022/Google_Cloud_Study_Jams_2022-main.jpg",
        attendees: 174,
        tags: ["GoogleCloud", "Workshops", "Learning", "Networking"],
      },
      {
        id: 2,
        title: "Git and GitHub Workshop",
        date: "2023",
        time: "9:00 AM - 6:00 PM",
        location: "NIET campus",
        description:
          "A practical workshop on mastering Git and GitHub to manage code repositories and collaborate effectively.",
        image:
          "/images/events/Git_and_GitHub_Workshop/Git_and_GitHub_Workshop-main.jpg",
        attendees: 211,
        tags: ["Git", "GitHub", "Workshops", "Networking"],
      },
      {
        id: 3,
        title: "Development for Collegiate Women in Tech",
        date: "2023",
        time: "9:00 AM - 6:00 PM",
        location: "Online (Virtual Event)",
        description:
          "A session aimed at encouraging collegiate women in tech to enhance their skills and grow in the field.",
        image:
          "/images/events/Development_for_Collegiate_Women_in_Tech/Development_for_Collegiate_Women_in_Tech-main.jpg",
        attendees: 263,
        tags: ["WomenInTech", "Development", "Empowerment", "Networking"],
      },
      {
        id: 4,
        title: "GDSC Orientation 2023-24",
        date: "2023",
        time: "9:00 AM - 6:00 PM",
        location: "NIET campus",
        description:
          "An introduction to the Google Developer Student Club (GDSC) and its community initiatives.",
        image:
          "/images/events/GDSC_Orientation_2023-24/GDSC_Orientation_2023-24-main.jpg",
        attendees: 245,
        tags: ["GDSC", "Orientation", "Networking", "Community"],
      },
      {
        id: 5,
        title: "Google Cloud Study Jams 2023",
        date: "2023",
        time: "9:00 AM - 6:00 PM",
        location: "NIET campus",
        description:
          "A hands-on session exploring Google Cloud technologies and building cloud solutions.",
        image:
          "/images/events/Google_Cloud_Study_Jams_2023/Google_Cloud_Study_Jams_2023-main.jpg",
        attendees: 199,
        tags: ["GoogleCloud", "CloudTech", "Workshops", "Networking"],
      },
      {
        id: 6,
        title: "Google Cloud Study Jams 2023 Swags Distribution",
        date: "2023",
        time: "9:00 AM - 6:00 PM",
        location: "NIET campus",
        description:
          "A session to celebrate and distribute swag for participants who completed the Google Cloud Study Jams 2023.",
        image:
          "/images/events/Google_Cloud_Study_Jams_2023_Swags_Distribution/Google_Cloud_Study_Jams_2023_Swags_Distribution-main.jpg",
        attendees: 182,
        tags: ["GoogleCloud", "StudyJams", "Swags", "Networking"],
      },
      {
        id: 7,
        title: "Devfest 2023 - New Delhi",
        date: "2023",
        time: "9:00 AM - 6:00 PM",
        location: "New Delhi",
        description:
          "An annual developer conference featuring talks, workshops, and networking opportunities with industry professionals.",
        image:
          "/images/events/Devfest_2023-New_Delhi/Devfest_2023-New_Delhi-main.jpg",
        attendees: 254,
        tags: ["DevFest", "Conference", "Networking", "Development"],
      },
      {
        id: 8,
        title: "GDG Orientation 2024-25 - First Year",
        date: "2024",
        time: "9:00 AM - 6:00 PM",
        location: "NIET campus",
        description:
          "A special orientation session for first-year students to get involved with GDG and start their journey in development.",
        image:
          "/images/events/GDG_Orientation_2024-25-First_Year/GDG_Orientation_2024-25-First_Year-main.jpg",
        attendees: 276,
        tags: ["Orientation", "GDG", "FirstYear", "Networking"],
      },
      {
        id: 9,
        title: "GDG Orientation 2024-25 - Second Year",
        date: "2024",
        time: "9:00 AM - 6:00 PM",
        location: "NIET campus",
        description:
          "Orientation for second-year students to introduce them to the Google Developer Group and its activities.",
        image:
          "/images/events/GDG_Orientation_2024-25-Second_Year/GDG_Orientation_2024-25-Second_Year-main.jpg",
        attendees: 189,
        tags: ["Orientation", "GDG", "Networking", "Students"],
      },
      {
        id: 10,
        title: "Build With AI",
        date: "2024",
        time: "9:00 AM - 6:00 PM",
        location: "Online (Virtual Event)",
        description:
          "An exciting event focused on leveraging AI technologies to build real-world applications and solutions.",
        image: "/images/events/Build_With_AI/Build_With_AI-main.png",
        attendees: 299,
        tags: ["AI", "Development", "Networking", "Innovation"],
      },
      {
        id: 11,
        title: "Google Women Engineers Program Cohort 6-2024",
        date: "2024",
        time: "9:00 AM - 6:00 PM",
        location: "Online (Virtual Event)",
        description:
          "An initiative by Google to empower women in engineering with resources, mentorship, and networking opportunities.",
        image:
          "/images/events/Google_Women_Engineers_Program_Cohort_6-2024/Google_Women_Engineers_Program_Cohort_6-2024-main.jpg",
        attendees: 214,
        tags: ["WomenInTech", "Empowerment", "Networking", "Google"],
      },
      {
        id: 12,
        title: "INNOVA 2024",
        date: "2024",
        time: "9:00 AM - 6:00 PM",
        location: "New Delhi",
        description:
          "A flagship event showcasing innovation, creativity, and cutting-edge technology through student projects and workshops.",
        image: "/images/events/innova_2024/INNOVA_2024-main.jpg",
        attendees: 268,
        tags: ["Innovation", "Technology", "Exhibition", "Networking"],
      },
      {
        id: 13,
        title: "GEN AI Study Jams 2025 Swags Distribution",
        date: "2025",
        time: "3:00 PM - 5:00 PM",
        location: "NIET campus",
        description:
          "A session to celebrate and distribute swag for participants who completed the GEN AI Study Jams 2024.",
        image: "/images/events/GEN_AI-Study_Jams_2025_Swags_Distribution/GEN_AI-Study_Jams_2025_Swags_Distribution-main.jpg",
        attendees: 120,
        tags: ["Innovation", "Technology", "Swags", "Networking"],
      },
    ],
  };

  const EventCard = ({ event }) => (
    <Card
      className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => setSelectedEvent(event)}
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <div className="space-y-3">
          <h3 className="text-xl font-bold line-clamp-1">{event.title}</h3>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>{event.time}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="line-clamp-1">{event.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>{event.attendees} attendees</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm line-clamp-2">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-1">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {selectedTab === "upcoming" && (
            <button className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Register Now
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const EventDetailsDialog = ({ event, onClose }) => (
    <Dialog open={!!event} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{event?.title}</DialogTitle>
          <DialogDescription>Event Details</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <img
            src={event?.image}
            alt={event?.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>{event?.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>{event?.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>{event?.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>{event?.attendees} attendees</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm">{event?.description}</p>
          <div className="flex flex-wrap gap-1">
            {event?.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          {selectedTab === "upcoming" && (
            <button className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Register Now
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );

  const filteredEvents = events[selectedTab].filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold my-8 mx-4">GDG NIET Events</h1>
          <p className="text-xl text-gray-600">
            Join us for exciting tech events, workshops, and conferences
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <Tabs defaultValue="upcoming" className="w-full md:w-auto">
            <TabsList>
              <TabsTrigger
                value="upcoming"
                onClick={() => setSelectedTab("upcoming")}
              >
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger value="past" onClick={() => setSelectedTab("past")}>
                Past Events
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search events..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents
            .slice()
            .reverse()
            .map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            {searchQuery === ""
              ? "There are no upcoming events."
              : "No events found matching your search criteria."}
          </div>
        )}

        <EventDetailsDialog
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
