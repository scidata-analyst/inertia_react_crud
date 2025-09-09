
import { Link } from "@inertiajs/react";
import { Search, User, LogIn, PlusCircle } from "lucide-react";

export default function Header() {
    return (
        <>
            {/* Main Header */}
            <header className="bg-white sticky top-0 z-50 shadow-sm">
                <div className=" px-4 py-4 flex items-center justify-between gap-8">
                    {/* Logo */}
                    <a href="/" className="text-2xl uppercase font-extrabold text-blue-600 tracking-tight transition-colors duration-200 hover:text-blue-800">
                        Hotel Booking
                    </a>

                    {/* Search */}
                    <div className="relative flex-1 max-w-2xl hidden md:block">
                        <input
                            type="text"
                            placeholder="Search hotels, destinations..."
                            className="w-full border border-gray-200 rounded-full pl-12 pr-4 py-2.5 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="#"
                            className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium transition-transform transform hover:scale-105 active:scale-95 duration-200 hidden sm:inline-flex items-center gap-2"
                        >
                            <PlusCircle className="w-4 h-4" />
                            <span className="hidden lg:inline">View Booking</span>
                        </Link>
                        <Link
                            href="#"
                            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Login"
                        >
                            <LogIn className="w-6 h-6" />
                        </Link>
                        <Link
                            href="#"
                            className="p-2 rounded-full text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                            aria-label="Profile"
                        >
                            <User className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Category Navigation */}
            <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-[72px] z-40 hidden md:block">
                <div className="px-4 flex items-center justify-center gap-6 py-3 text-gray-600 text-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
                    {[
                        "All",
                        "Single Room",
                        "Double Room",
                        "Luxury",
                        "Suites",
                        "Family",
                        "Apartments",
                        "Villas",
                        "Cabins",
                        "Resorts",
                    ].map((room, i) => (
                        <Link
                            key={i}
                            href="#"
                            className="relative group font-medium text-gray-700 text-2xl uppercase hover:text-blue-600 transition-colors duration-200 p-2"
                        >
                            {room}
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
}
