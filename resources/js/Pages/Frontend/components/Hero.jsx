export default function Hero() {
    return (
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
    );
}
