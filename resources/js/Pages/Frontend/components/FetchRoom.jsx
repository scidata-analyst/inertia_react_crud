import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import FetchRoomSkeleton from "./FetchRoomSkeleton";

export default function FetchRoom() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch("/rooms/fetch");
                const data = await response.json();
                setRooms(data.data);
            } catch (error) {
                console.error("Error fetching rooms:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, []);

    return loading ? (
        <FetchRoomSkeleton />
    ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {rooms.map((room, index) => (
                <Card
                    key={index}
                    className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition w-full"
                >
                    <div className="relative">
                        <img
                            src="https://d354o3y6yz93dt.cloudfront.net/images/768x/ff96097e8e14c51fd44838a36133301a63be45f2/Brookdale-Overland-Park-119th-Living-Room.jpg"
                            alt={room.name}
                            className="w-full h-56 object-cover"
                        />
                        <span className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            ${room.price}/night
                        </span>
                    </div>
                    <CardContent className="p-5 space-y-3">
                        <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                        <p className="text-gray-600 mb-4">
                            {room.description.length > 80
                                ? room.description.slice(0, 80) + "..."
                                : room.description}
                        </p>

                        <div className="flex items-center justify-between text-gray-500 mb-4">
                            <div className="flex items-center space-x-1">
                                <i className="bi bi-person-fill"></i>
                                <span>{room.capacity} Guest</span>
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

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                Wi-Fi
                            </span>
                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                AC
                            </span>
                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                TV
                            </span>
                            <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                Breakfast
                            </span>
                        </div>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition">
                            Book Now
                        </button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
