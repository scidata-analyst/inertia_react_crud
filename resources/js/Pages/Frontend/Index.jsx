import { Head, Link } from "@inertiajs/react";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Footer from "./Footer";
import Header from "./Header";


export default function Index() {
    return (
        <>
            <Head title="Home Page" />

            {/* header section */}
            <Header />
            {/* end header section */}

            {/* main section */}
            <main className="relative w-full">
                {/* Hero Background */}
                <section className="relative bg-cover bg-center h-[600px] rounded-b-3xl" style={{ backgroundImage: "url('https://picsum.photos/1600/600?hotel')" }}>
                    <div className="absolute inset-0 bg-black/40 rounded-b-3xl"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                            Welcome to Grand Royale Hotel
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6 drop-shadow-md">
                            Experience luxury and comfort in our premium rooms and suites. Perfect for couples, families, and business travelers.
                        </p>
                        <a
                            href="#search"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg"
                        >
                            Explore Rooms
                        </a>
                    </div>
                </section>

                {/* Featured Rooms */}
                <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-20">
                    {/* Sample Room Card */}
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                        <img
                            src="https://d354o3y6yz93dt.cloudfront.net/images/768x/ff96097e8e14c51fd44838a36133301a63be45f2/Brookdale-Overland-Park-119th-Living-Room.jpg"
                            alt="Deluxe Room"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">Deluxe Room</h2>
                            <p className="text-gray-600 mb-4">Spacious room with modern amenities and breathtaking city views.</p>
                            <span className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-sm">From $120/night</span>
                        </div>
                    </div>

                    {/* Additional Sample Rooms */}
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                        <img
                            src="https://picsum.photos/600/400?2"
                            alt="Suite"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">Executive Suite</h2>
                            <p className="text-gray-600 mb-4">Luxury suite with king-sized bed, private balcony, and premium services.</p>
                            <span className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-sm">From $220/night</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                        <img
                            src="https://picsum.photos/600/400?3"
                            alt="Single Room"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">Single Room</h2>
                            <p className="text-gray-600 mb-4">Cozy room ideal for solo travelers, with all essential amenities.</p>
                            <span className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-sm">From $80/night</span>
                        </div>
                    </div>
                </section>
            </main>
            {/* end main section */}

            {/* search section */}
            <section className="p-4 bg-gray-50 max-w-[1280px] mx-auto mt-4 rounded-2xl">
                <h2 className="text-4xl font-bold mb-6 text-center uppercase">Find your perfect room.</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-white rounded-xl shadow-lg">
                    {/* Location */}
                    <div className="relative">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <input
                            type="text"
                            id="location"
                            placeholder="City or Destination"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Check-in */}
                    <div className="relative">
                        <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                        <input
                            type="date"
                            id="checkin"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Check-out */}
                    <div className="relative">
                        <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                        <input
                            type="date"
                            id="checkout"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Room Type */}
                    <div className="relative">
                        <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                        <select
                            id="roomType"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                        >
                            <option value="" disabled selected hidden>Select a room type</option>
                            <option value="single">Single</option>
                            <option value="double">Double</option>
                            <option value="suite">Suite</option>
                        </select>
                    </div>

                    {/* Submit Button (Full width) */}
                    <div className="col-span-1 md:col-span-2 mt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Check Availability
                        </button>
                    </div>
                </form>
            </section>
            {/* end search section */}

            {/* single room section */}
            <section className="p-4 mb-10 mt-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold">Single Rooms</h2>
                        <p className="mb-6 text-center">Explore our selection of cozy and comfortable single rooms, perfect for solo travelers.</p>
                    </div>
                    <div>
                        <a href="#" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">View All</a>
                    </div>
                </div>

                <Carousel className="w-full max-w-[1780px] mx-auto">
                    <CarouselContent className="">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 p-4 mb-5 mt-5">
                                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
                                    <div className="relative">
                                        <img
                                            src="https://d354o3y6yz93dt.cloudfront.net/images/768x/ff96097e8e14c51fd44838a36133301a63be45f2/Brookdale-Overland-Park-119th-Living-Room.jpg"
                                            alt="Cozy Single Room"
                                            className="w-full h-56 object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            $80/night
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-2xl font-semibold mb-2">Cozy Single Room</h3>
                                        <p className="text-gray-600 mb-4">
                                            Perfect for solo travelers, this room offers comfort, privacy, and modern amenities.
                                        </p>

                                        {/* Room Details */}
                                        <div className="flex items-center justify-between text-gray-500 mb-4">
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-person-fill"></i>
                                                <span>1 Guest</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-door-open-fill"></i>
                                                <span>1 Bed</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-star-fill text-yellow-400"></i>
                                                <span>4.5</span>
                                            </div>
                                        </div>

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Wi-Fi</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">AC</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">TV</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Breakfast</span>
                                        </div>

                                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            {/* end single room section */}

            {/* single room section */}
            <section className="p-4 mb-10 mt-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold">Single Rooms</h2>
                        <p className="mb-6 text-center">Explore our selection of cozy and comfortable single rooms, perfect for solo travelers.</p>
                    </div>
                    <div>
                        <a href="#" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">View All</a>
                    </div>
                </div>

                <Carousel className="w-full max-w-[1780px] mx-auto">
                    <CarouselContent className="">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 p-4 mb-5 mt-5">
                                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
                                    <div className="relative">
                                        <img
                                            src="https://d354o3y6yz93dt.cloudfront.net/images/768x/ff96097e8e14c51fd44838a36133301a63be45f2/Brookdale-Overland-Park-119th-Living-Room.jpg"
                                            alt="Cozy Single Room"
                                            className="w-full h-56 object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            $80/night
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-2xl font-semibold mb-2">Cozy Single Room</h3>
                                        <p className="text-gray-600 mb-4">
                                            Perfect for solo travelers, this room offers comfort, privacy, and modern amenities.
                                        </p>

                                        {/* Room Details */}
                                        <div className="flex items-center justify-between text-gray-500 mb-4">
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-person-fill"></i>
                                                <span>1 Guest</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-door-open-fill"></i>
                                                <span>1 Bed</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-star-fill text-yellow-400"></i>
                                                <span>4.5</span>
                                            </div>
                                        </div>

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Wi-Fi</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">AC</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">TV</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Breakfast</span>
                                        </div>

                                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            {/* end single room section */}

            {/* single room section */}
            <section className="p-4 mb-10 mt-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold">Single Rooms</h2>
                        <p className="mb-6 text-center">Explore our selection of cozy and comfortable single rooms, perfect for solo travelers.</p>
                    </div>
                    <div>
                        <a href="#" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">View All</a>
                    </div>
                </div>

                <Carousel className="w-full max-w-[1780px] mx-auto">
                    <CarouselContent className="">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 p-4 mb-5 mt-5">
                                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
                                    <div className="relative">
                                        <img
                                            src="https://d354o3y6yz93dt.cloudfront.net/images/768x/ff96097e8e14c51fd44838a36133301a63be45f2/Brookdale-Overland-Park-119th-Living-Room.jpg"
                                            alt="Cozy Single Room"
                                            className="w-full h-56 object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            $80/night
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-2xl font-semibold mb-2">Cozy Single Room</h3>
                                        <p className="text-gray-600 mb-4">
                                            Perfect for solo travelers, this room offers comfort, privacy, and modern amenities.
                                        </p>

                                        {/* Room Details */}
                                        <div className="flex items-center justify-between text-gray-500 mb-4">
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-person-fill"></i>
                                                <span>1 Guest</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-door-open-fill"></i>
                                                <span>1 Bed</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-star-fill text-yellow-400"></i>
                                                <span>4.5</span>
                                            </div>
                                        </div>

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Wi-Fi</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">AC</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">TV</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Breakfast</span>
                                        </div>

                                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            {/* end single room section */}

            {/* single room section */}
            <section className="p-4 mb-10 mt-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold">Single Rooms</h2>
                        <p className="mb-6 text-center">Explore our selection of cozy and comfortable single rooms, perfect for solo travelers.</p>
                    </div>
                    <div>
                        <a href="#" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">View All</a>
                    </div>
                </div>

                <Carousel className="w-full max-w-[1780px] mx-auto">
                    <CarouselContent className="">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 p-4 mb-5 mt-5">
                                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
                                    <div className="relative">
                                        <img
                                            src="https://d354o3y6yz93dt.cloudfront.net/images/768x/ff96097e8e14c51fd44838a36133301a63be45f2/Brookdale-Overland-Park-119th-Living-Room.jpg"
                                            alt="Cozy Single Room"
                                            className="w-full h-56 object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            $80/night
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-2xl font-semibold mb-2">Cozy Single Room</h3>
                                        <p className="text-gray-600 mb-4">
                                            Perfect for solo travelers, this room offers comfort, privacy, and modern amenities.
                                        </p>

                                        {/* Room Details */}
                                        <div className="flex items-center justify-between text-gray-500 mb-4">
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-person-fill"></i>
                                                <span>1 Guest</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-door-open-fill"></i>
                                                <span>1 Bed</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-star-fill text-yellow-400"></i>
                                                <span>4.5</span>
                                            </div>
                                        </div>

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Wi-Fi</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">AC</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">TV</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Breakfast</span>
                                        </div>

                                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            {/* end single room section */}

            {/* single room section */}
            <section className="p-4 mb-10 mt-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold">Single Rooms</h2>
                        <p className="mb-6 text-center">Explore our selection of cozy and comfortable single rooms, perfect for solo travelers.</p>
                    </div>
                    <div>
                        <a href="#" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">View All</a>
                    </div>
                </div>

                <Carousel className="w-full max-w-[1780px] mx-auto">
                    <CarouselContent className="">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 p-4 mb-5 mt-5">
                                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
                                    <div className="relative">
                                        <img
                                            src="https://d354o3y6yz93dt.cloudfront.net/images/768x/ff96097e8e14c51fd44838a36133301a63be45f2/Brookdale-Overland-Park-119th-Living-Room.jpg"
                                            alt="Cozy Single Room"
                                            className="w-full h-56 object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            $80/night
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-2xl font-semibold mb-2">Cozy Single Room</h3>
                                        <p className="text-gray-600 mb-4">
                                            Perfect for solo travelers, this room offers comfort, privacy, and modern amenities.
                                        </p>

                                        {/* Room Details */}
                                        <div className="flex items-center justify-between text-gray-500 mb-4">
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-person-fill"></i>
                                                <span>1 Guest</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-door-open-fill"></i>
                                                <span>1 Bed</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-star-fill text-yellow-400"></i>
                                                <span>4.5</span>
                                            </div>
                                        </div>

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Wi-Fi</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">AC</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">TV</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Breakfast</span>
                                        </div>

                                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            {/* end single room section */}

            {/* single room section */}
            <section className="p-4 mb-10 mt-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold">Single Rooms</h2>
                        <p className="mb-6 text-center">Explore our selection of cozy and comfortable single rooms, perfect for solo travelers.</p>
                    </div>
                    <div>
                        <a href="#" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">View All</a>
                    </div>
                </div>

                <Carousel className="w-full max-w-[1780px] mx-auto">
                    <CarouselContent className="">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 p-4 mb-5 mt-5">
                                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
                                    <div className="relative">
                                        <img
                                            src="https://d354o3y6yz93dt.cloudfront.net/images/768x/ff96097e8e14c51fd44838a36133301a63be45f2/Brookdale-Overland-Park-119th-Living-Room.jpg"
                                            alt="Cozy Single Room"
                                            className="w-full h-56 object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            $80/night
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-2xl font-semibold mb-2">Cozy Single Room</h3>
                                        <p className="text-gray-600 mb-4">
                                            Perfect for solo travelers, this room offers comfort, privacy, and modern amenities.
                                        </p>

                                        {/* Room Details */}
                                        <div className="flex items-center justify-between text-gray-500 mb-4">
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-person-fill"></i>
                                                <span>1 Guest</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-door-open-fill"></i>
                                                <span>1 Bed</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-star-fill text-yellow-400"></i>
                                                <span>4.5</span>
                                            </div>
                                        </div>

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Wi-Fi</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">AC</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">TV</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Breakfast</span>
                                        </div>

                                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            {/* end single room section */}

            {/* single room section */}
            <section className="p-4 mb-10 mt-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold">Single Rooms</h2>
                        <p className="mb-6 text-center">Explore our selection of cozy and comfortable single rooms, perfect for solo travelers.</p>
                    </div>
                    <div>
                        <a href="#" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">View All</a>
                    </div>
                </div>

                <Carousel className="w-full max-w-[1780px] mx-auto">
                    <CarouselContent className="">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 p-4 mb-5 mt-5">
                                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
                                    <div className="relative">
                                        <img
                                            src="https://d354o3y6yz93dt.cloudfront.net/images/768x/ff96097e8e14c51fd44838a36133301a63be45f2/Brookdale-Overland-Park-119th-Living-Room.jpg"
                                            alt="Cozy Single Room"
                                            className="w-full h-56 object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            $80/night
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-2xl font-semibold mb-2">Cozy Single Room</h3>
                                        <p className="text-gray-600 mb-4">
                                            Perfect for solo travelers, this room offers comfort, privacy, and modern amenities.
                                        </p>

                                        {/* Room Details */}
                                        <div className="flex items-center justify-between text-gray-500 mb-4">
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-person-fill"></i>
                                                <span>1 Guest</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-door-open-fill"></i>
                                                <span>1 Bed</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <i className="bi bi-star-fill text-yellow-400"></i>
                                                <span>4.5</span>
                                            </div>
                                        </div>

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Wi-Fi</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">AC</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">TV</span>
                                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Breakfast</span>
                                        </div>

                                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            {/* end single room section */}

            {/* footer section */}
            <Footer />
            {/* end footer section */}

            {/* copyright section */}
            {/* <footer className="p-4 bg-gray-800 text-white text-center">
                <p>&copy; 2025 Hotel Booking App. All rights reserved.</p>
            </footer> */}
            {/* end copyright section */}
        </>
    );
}
