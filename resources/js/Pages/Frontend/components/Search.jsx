export default function Search() {
    return (
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
    )
}
