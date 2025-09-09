export default function Filter() {
    return (
        <aside className="w-full md:w-80 bg-white shadow-lg rounded-2xl p-6 space-y-6 sticky top-20">
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
                        <span>Single Room</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="text-blue-500 rounded" />
                        <span>Double Room</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="text-blue-500 rounded" />
                        <span>Suite Room</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="text-blue-500 rounded" />
                        <span>Luxury Room</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="text-blue-500 rounded" />
                        <span>Suite Room</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="text-blue-500 rounded" />
                        <span>Family Room</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="text-blue-500 rounded" />
                        <span>Apartments Room</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="text-blue-500 rounded" />
                        <span>Villa Room</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="text-blue-500 rounded" />
                        <span>Cabin Room</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="text-blue-500 rounded" />
                        <span>Resort Room</span>
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
    )
}
