import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ChevronRight, Search } from 'lucide-react';
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
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
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
                image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
                image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80",
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
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
                image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
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
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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

