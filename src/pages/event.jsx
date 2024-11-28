import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ChevronRight, Search, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const EventsPage = () => {
    const [selectedTab, setSelectedTab] = useState('upcoming');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = {
        upcoming: [
            {
                id: 1,
                title: "Flutter Forward Extended",
                date: "December 15, 2024",
                time: "10:00 AM - 4:00 PM",
                location: "CS Block Auditorium, NIET",
                description: "Join us for an exciting day of Flutter development with hands-on workshops and expert talks.",
                image: "/api/placeholder/400/200",
                attendees: 150,
                tags: ["Flutter", "Mobile Dev", "Workshop"]
            },
            {
                id: 2,
                title: "Cloud Study Jam",
                date: "January 10, 2025",
                time: "11:00 AM - 3:00 PM",
                location: "IT Block Seminar Hall, NIET",
                description: "Learn about Google Cloud Platform and get hands-on experience with cloud technologies.",
                image: "/api/placeholder/400/200",
                attendees: 100,
                tags: ["Cloud", "GCP", "DevOps"]
            },
            {
                id: 3,
                title: "Android Dev Days",
                date: "January 25, 2025",
                time: "10:00 AM - 5:00 PM",
                location: "CS Block Lab 3, NIET",
                description: "Dive deep into Android development with Kotlin and Jetpack Compose.",
                image: "/api/placeholder/400/200",
                attendees: 80,
                tags: ["Android", "Kotlin", "Mobile"]
            },
            {
                id: 4,
                title: "Web Development Workshop",
                date: "February 5, 2025",
                time: "2:00 PM - 6:00 PM",
                location: "Online (Virtual Event)",
                description: "Learn modern web development using React and Next.js framework.",
                image: "/api/placeholder/400/200",
                attendees: 200,
                tags: ["Web Dev", "React", "Next.js"]
            },
            {
                id: 5,
                title: "Machine Learning Bootcamp",
                date: "February 15, 2025",
                time: "9:00 AM - 4:00 PM",
                location: "IT Block Auditorium, NIET",
                description: "Intensive bootcamp covering ML basics to advanced topics with TensorFlow.",
                image: "/api/placeholder/400/200",
                attendees: 120,
                tags: ["ML", "AI", "TensorFlow"]
            },
            {
                id: 6,
                title: "Women Techmakers",
                date: "March 8, 2025",
                time: "10:00 AM - 4:00 PM",
                location: "Main Auditorium, NIET",
                description: "Celebrating women in technology with inspiring talks and workshops.",
                image: "/api/placeholder/400/200",
                attendees: 250,
                tags: ["WTM", "Community", "Diversity"]
            }
        ],
        past: [
            {
                id: 7,
                title: "DevFest 2024",
                date: "November 5, 2024",
                time: "9:00 AM - 6:00 PM",
                location: "NIET Main Auditorium",
                description: "Annual developer festival featuring cutting-edge technology talks and networking.",
                image: "/api/placeholder/400/200",
                attendees: 300,
                tags: ["DevFest", "Conference", "Networking"]
            },
            {
                id: 8,
                title: "Firebase Workshop",
                date: "October 20, 2024",
                time: "11:00 AM - 3:00 PM",
                location: "CS Block Lab 2, NIET",
                description: "Hands-on workshop on Firebase and its various services.",
                image: "/api/placeholder/400/200",
                attendees: 90,
                tags: ["Firebase", "Cloud", "Backend"]
            },
            {
                id: 9,
                title: "Hacktoberfest Kickoff",
                date: "October 1, 2024",
                time: "10:00 AM - 2:00 PM",
                location: "IT Block Seminar Hall, NIET",
                description: "Introduction to open source contributions and Git workflow.",
                image: "/api/placeholder/400/200",
                attendees: 150,
                tags: ["OpenSource", "Git", "Community"]
            }
        ]
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

                    <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>

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

                    {selectedTab === 'upcoming' && (
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
                    {selectedTab === 'upcoming' && (
                        <button className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            Register Now
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );

    const filteredEvents = events[selectedTab].filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">GDG NIET Events</h1>
                    <p className="text-xl text-gray-600">
                        Join us for exciting tech events, workshops, and conferences
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                    <Tabs defaultValue="upcoming" className="w-full md:w-auto">
                        <TabsList>
                            <TabsTrigger
                                value="upcoming"
                                onClick={() => setSelectedTab('upcoming')}
                            >
                                Upcoming Events
                            </TabsTrigger>
                            <TabsTrigger
                                value="past"
                                onClick={() => setSelectedTab('past')}
                            >
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
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>

                {filteredEvents.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        No events found matching your search criteria.
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

