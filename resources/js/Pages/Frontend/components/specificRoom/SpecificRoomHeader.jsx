import { Star } from "lucide-react"

export default function SpecificRoomHeader({ data }) {
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

    return (
        <section className="relative w-full h-[400px] md:h-[500px]">
            <img
                src={hotel.image_urls[0]}
                alt={data.name}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
            <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-12 text-white">
                <h1 className="text-4xl md:text-5xl font-bold">{data.name}</h1>
                <div className="flex items-center mt-2 gap-1 text-yellow-400">
                    {[...Array(Math.floor(hotel.rating))].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm">
                        {hotel.rating} ({room.reviews_count} reviews)
                    </span>
                </div>
                <p className="mt-2 text-xl font-semibold text-blue-200">
                    From ${data.price} / night
                </p>
            </div>
        </section>
    )
}
