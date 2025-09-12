import Header from "./components/Header";
import Footer from "./components/Footer";
import { Card, CardContent } from "@/Components/ui/card";
import {
    Calendar,
    Users,
    DollarSign,
    BedDouble,
    Star,
    MapPin,
    Phone,
    Mail,
    ShieldCheck,
    Clock,
    Bus,
    Coffee,
} from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Head } from "@inertiajs/react";
import { lazy, Suspense } from "react";
const SpecificRoomHeader = lazy(() => import("./components/specificRoom/SpecificRoomHeader"));
const SpecificRoomHeaderSkeleton = lazy(() => import("./components/specificRoom/SpecificRoomHeaderSkeleton"));

export default function SpecificRoom({ data }) {
    const hotel = {
        name: "Grand Royale Hotel",
        description:
            "Experience luxury and comfort at the heart of the city with world-class amenities.",
        address: "123 Main Street",
        city: "Metropolis",
        state: "Central State",
        country: "Wonderland",
        phone: "+123 456 7890",
        email: "info@grandroyale.com",
        rating: 4.8,
        image_urls: [
            "https://picsum.photos/1200/600?random=1",
            "https://picsum.photos/1200/600?random=2",
            "https://picsum.photos/1200/600?random=3",
        ],
    };

    const room = {
        name: "Deluxe King Room",
        description:
            "A spacious king-sized room with a private balcony, modern bathroom, and breathtaking city views.",
        bed_info: "1 King Bed",
        guests_info: "2 Adults, 1 Child",
        price: 150,
        reviews_count: 124,
    };

    const attractions = [
        { icon: Bus, text: "5 min walk to Metro Station" },
        { icon: Coffee, text: "Famous Café next door" },
        { icon: Clock, text: "10 min to City Park" },
    ];

    const reviews = [
        { name: "Alice", text: "Fantastic stay, very clean and cozy!", stars: 5 },
        { name: "John", text: "Great location and friendly staff.", stars: 4 },
        { name: "Sophia", text: "Loved the breakfast options!", stars: 5 },
    ];

    return (
        <>
            <Header />
            <Head title={`${data.name} `} />


            {/* Hero with overlay */}
            <Suspense fallback={<SpecificRoomHeaderSkeleton />}>
                <SpecificRoomHeader data={data} />
            </Suspense>
            {/* End Hero with overlay */}

            {/* Main layout */}
            <section className="px-4 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Room overview */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                            Room Overview
                        </h2>
                        <p className="text-gray-700 leading-relaxed">{data.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                            <div className="flex items-center gap-2">
                                <BedDouble className="w-5 h-5 text-blue-600" />
                                <span>{room.bed_info}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-blue-600" />
                                <span>{data.capacity}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-blue-600" />
                                <span>${data.price} / night</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-blue-600" />
                                <span>Free Cancellation</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Carousel */}
                    <div>
                        <Carousel>
                            <CarouselContent>
                                {hotel.image_urls.map((img, i) => (
                                    <CarouselItem key={i}>
                                        <img
                                            src={img}
                                            alt={`${room.name} ${i + 1}`}
                                            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                        </Carousel>
                    </div>

                    {/* Nearby Attractions */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Nearby Attractions</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {attractions.map((a, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border hover:shadow-md transition"
                                >
                                    <a.icon className="w-6 h-6 text-blue-600" />
                                    <span className="text-gray-700">{a.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reviews */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Guest Reviews</h2>
                        <Carousel>
                            <CarouselContent>
                                {reviews.map((r, i) => (
                                    <CarouselItem key={i} className="p-4">
                                        <div className="bg-white p-6 rounded-xl shadow-md border">
                                            <div className="flex items-center mb-2 gap-1 text-yellow-500">
                                                {[...Array(r.stars)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-yellow-500" />
                                                ))}
                                            </div>
                                            <p className="text-gray-700 mb-2">“{r.text}”</p>
                                            <p className="text-sm font-medium text-gray-900">- {r.name}</p>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                        </Carousel>
                    </div>

                    {/* FAQ Accordion */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="checkin">
                                <AccordionTrigger>What are the check-in and check-out times?</AccordionTrigger>
                                <AccordionContent>
                                    Check-in starts at 2:00 PM, and check-out is until 11:00 AM.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="cancellation">
                                <AccordionTrigger>What is the cancellation policy?</AccordionTrigger>
                                <AccordionContent>
                                    Free cancellation up to 48 hours before arrival.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="parking">
                                <AccordionTrigger>Is parking available?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, we offer free private parking for guests.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                {/* Booking Sidebar */}
                <aside>
                    <div className="sticky top-24 p-6 bg-white rounded-2xl shadow-xl border space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Check Availability
                            </h3>
                            <span className="text-xl font-bold text-blue-600">
                                ${data.price}
                            </span>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Check-in
                                </label>
                                <input
                                    type="date"
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Check-out
                                </label>
                                <input
                                    type="date"
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Guests
                                </label>
                                <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    <option>1 Adult</option>
                                    <option>2 Adults</option>
                                    <option>2 Adults, 1 Child</option>
                                    <option>Family (4)</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
                            >
                                Book Now
                            </button>
                            <button
                                type="button"
                                className="w-full border border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition"
                            >
                                Contact Hotel
                            </button>
                        </form>

                        {/* Trust Signals */}
                        <div className="pt-4 border-t mt-4 space-y-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-green-600" /> Free Cancellation
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-green-600" /> Best Price Guarantee
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-green-600" /> 24/7 Support
                            </div>
                        </div>

                        {/* Urgency Cue */}
                        <p className="text-red-600 text-sm font-medium mt-2">
                            Only 2 rooms left for your dates!
                        </p>
                    </div>
                </aside>
            </section>

            {/* Hotel Info */}
            <section className="lg:px-12 py-12 border-t bg-gray-50">
                <div className="grid gap-10 lg:grid-cols-3">
                    {/* Left Column - Description + Highlights */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Hotel Highlights */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <span className="font-medium text-gray-800">{hotel.rating} / 5 Rating</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                                <BedDouble className="w-5 h-5 text-blue-600" />
                                <span className="font-medium text-gray-800">50 Rooms</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                                <Clock className="w-5 h-5 text-blue-600" />
                                <span className="font-medium text-gray-800">Check-in: 2 PM / Check-out: 11 AM</span>
                            </div>
                        </div>

                        {/* Description */}
                        <Card className="pt-6">
                            <CardContent className="space-y-4">
                                <h2 className="text-2xl font-semibold text-gray-900">About {hotel.name}</h2>
                                <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Contact & Map */}
                    <div className="space-y-6">
                        {/* Contact Info */}
                        <Card className="pt-6 space-y-4">
                            <CardContent className="space-y-3">
                                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                    <span>{hotel.address}, {hotel.city}, {hotel.state}, {hotel.country}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                    <span>{hotel.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                    <span>{hotel.email}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="mt-10">
                    {/* Map Placeholder */}
                    <Card className="overflow-hidden h-64">
                        <CardContent className="p-0 w-full h-full">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                                Map Placeholder
                            </div>
                        </CardContent>
                    </Card>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-3 mt-5">
                        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                            Book Now
                        </button>
                        <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition">
                            View Rooms
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
