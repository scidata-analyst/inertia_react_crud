export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">HotelBooking</h2>
                    <p className="text-gray-400">
                        Experience luxury stays and find your perfect room worldwide with ease.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">Rooms</a></li>
                        <li><a href="#" className="hover:text-white transition">Services</a></li>
                        <li><a href="#" className="hover:text-white transition">Offers</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                    <p className="text-gray-400">123 Luxury St, Dream City</p>
                    <p className="text-gray-400">Email: info@hotelbooking.com</p>
                    <p className="text-gray-400">Phone: +123 456 7890</p>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
                    <p className="text-gray-400 mb-4">Subscribe to get latest offers & updates.</p>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200 flex-1"
                        />
                        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Socials & Copyright */}
            <div className="border-t border-gray-700 mt-10 py-6 flex flex-col md:flex-row items-center justify-between px-6">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" className="hover:text-white transition"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="hover:text-white transition"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="hover:text-white transition"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="hover:text-white transition"><i className="bi bi-linkedin"></i></a>
                </div>
                <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} HotelBooking. All rights reserved.</p>
            </div>
        </footer>
    );
}
