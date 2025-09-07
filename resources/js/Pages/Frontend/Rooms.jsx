import { Head } from "@inertiajs/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Rooms() {
    return (
        <>
            <Head title="Hotels - Hotel Management" />
            {/* header section */}
            <Header />
            {/* end header section */}

            {/* main section */}
            <main className="p-4 w-full flex flex-row gap-5">
                <div>
                    {/* Sidebar Filter Section */}
                    <aside className="w-full md:w-80 bg-white shadow-lg rounded-2xl p-6 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800 border-b pb-3">
                            Filter Rooms
                        </h2>

                        {/* Room Name / Keyword */}
                        <div>
                            <label htmlFor="keyword" className="block text-sm font-medium text-gray-600 mb-2">
                                Room / Keyword
                            </label>
                            <input
                                id="keyword"
                                type="text"
                                placeholder="e.g. Deluxe, Sea View"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Room Type */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Room Type</h3>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="text-blue-500 rounded" />
                                    <span>Single</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="text-blue-500 rounded" />
                                    <span>Double</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="text-blue-500 rounded" />
                                    <span>Suite</span>
                                </label>
                            </div>
                        </div>

                        {/* Capacity */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Guests (Capacity)</h3>
                            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Any</option>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4+ Guests</option>
                            </select>
                        </div>

                        {/* Price Range */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Price Range</h3>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                                />
                                <span className="text-gray-500">-</span>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Availability */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-600 mb-2">Availability</h3>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="text-blue-500 rounded" />
                                <span>Only Show Available Rooms</span>
                            </label>
                        </div>

                        {/* Apply Filters */}
                        <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
                            Apply Filters
                        </button>
                    </aside>
                    {/* End Sidebar Filter Section */}
                </div>

                <div className="grid grid-cols-3 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
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
                </div>
            </main>
            {/* end main section */}

            {/* footer section */}
            <Footer />
            {/* end footer section */}
        </>
    );
}
