import Header from "./Header";
import Footer from "./Footer";
import { Calendar, Users, DollarSign, BedDouble, Star, MapPin, Phone, Mail } from "lucide-react";

// shadcn carousel
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Head } from "@inertiajs/react";

export default function SpecificRoom() {
    // Dummy data
    const hotel = {
        name: "Grand Royale Hotel",
        description: "Experience luxury and comfort at the heart of the city with world-class amenities.",
        address: "123 Main Street",
        city: "Metropolis",
        state: "Central State",
        country: "Wonderland",
        phone: "+123 456 7890",
        email: "info@grandroyale.com",
        rating: 4.8,
        image_urls: [
            "https://picsum.photos/900/500?random=1",
            "https://picsum.photos/900/500?random=2",
            "https://picsum.photos/900/500?random=3",
        ],
    };

    const room = {
        name: "Deluxe King Room",
        description: "A spacious king-sized room with a private balcony, modern bathroom, and breathtaking city views.",
        bed_info: "1 King Bed",
        guests_info: "2 Adults, 1 Child",
        price: 150,
        reviews_count: 124,
    };

    return (
        <>
            <Header />

            <Head title="Specific Room - Hotel Management" />

            {/* Hero Section */}
            <section className="bg-white py-6 border-b shadow-sm">
                <div className="px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <nav className="text-sm text-gray-500 mb-2">
                            Home / Hotels / {room.name}
                        </nav>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {room.name}
                        </h1>
                        <div className="flex items-center mt-2 gap-1 text-yellow-500">
                            {[...Array(Math.floor(hotel.rating))].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-500" />
                            ))}
                            <span className="ml-2 text-gray-600 text-sm">
                                {hotel.rating} ({room.reviews_count} reviews)
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:block text-right">
                        <span className="text-sm text-gray-500">from</span>{" "}
                        <span className="text-3xl font-extrabold text-blue-600">
                            ${room.price}
                        </span>{" "}
                        <span className="text-gray-500 text-sm">/ night</span>
                    </div>
                </div>
            </section>

            {/* Room Overview */}
            <div className="p-4">
                <div className="space-y-4 mt-4 text-gray-700">
                    <h2 className="text-2xl font-semibold text-gray-900">Room Overview</h2>
                    <p className="leading-relaxed">{room.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                        <div className="flex items-center gap-2">
                            <BedDouble className="w-5 h-5 text-blue-600" />
                            <span>{room.bed_info}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-600" />
                            <span>{room.guests_info}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-blue-600" />
                            <span>${room.price} / night</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            <span>Free Cancellation</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Room Images & Booking */}
            <section className="px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Carousel */}
                <div>
                    <Carousel className="mb-8">
                        <CarouselContent>
                            {hotel.image_urls.map((img, i) => (
                                <CarouselItem key={i}>
                                    <img
                                        src={img}
                                        alt={`${room.name} ${i + 1}`}
                                        className="w-full h-[440px] object-cover rounded-2xl shadow-md"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                </div>

                {/* Booking Card */}
                <aside>
                    <div className="sticky top-24 p-6 bg-white rounded-2xl shadow-xl border">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Check Availability</h3>
                            <span className="text-xl font-bold text-blue-600">${room.price}</span>
                        </div>
                        <form className="space-y-4 flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Check-in
                                </label>
                                <input type="date" className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Check-out
                                </label>
                                <input type="date" className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Guests</label>
                                <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    <option>1 Adult</option>
                                    <option>2 Adults</option>
                                    <option>2 Adults, 1 Child</option>
                                    <option>Family (4)</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                                Book Now
                            </button>
                        </form>
                    </div>
                </aside>
            </section>

            {/* Hotel Info */}
            <section className="p-4 mb-10 grid md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-3xl font-bold mb-4">About {hotel.name}</h2>
                    <p className="text-gray-700 mb-4">{hotel.description}</p>
                    <div className="space-y-2 text-gray-600">
                        <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-600" /> {hotel.address}, {hotel.city}, {hotel.state}, {hotel.country}</div>
                        <div className="flex items-center gap-2"><Phone className="w-5 h-5 text-blue-600" /> {hotel.phone}</div>
                        <div className="flex items-center gap-2"><Mail className="w-5 h-5 text-blue-600" /> {hotel.email}</div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
