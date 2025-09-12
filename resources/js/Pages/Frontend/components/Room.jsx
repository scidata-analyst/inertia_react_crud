import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

/* Async Image Loader (simple) */
const AsyncImage = ({ src, alt, className }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            {!loaded && <Skeleton className={className} />}
            {loaded && (
                <img
                    src={src}
                    alt={alt}
                    className={className}
                    onLoad={() => setLoaded(true)}
                    onError={() => setLoaded(true)}
                />
            )}
            {!loaded && (
                <img
                    src={src}
                    alt={alt}
                    className="hidden"
                    onLoad={() => setLoaded(true)}
                    onError={() => setLoaded(true)}
                />
            )}
        </>
    );
};

export default function Room({ title, type, short_brief }) {
    const [rooms, setRooms] = useState(null);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch("room/type/" + type);
                const data = await response.json();
                setRooms(data);
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        };

        fetchRooms();
    }, [type]);

    const skeletons = Array.from({ length: 6 });

    return (
        <section className="p-4 mb-10 mt-10">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <p className="mb-6 text-center">{short_brief}</p>
                </div>
                <div>
                    <Link
                        href={`/rooms/all`}
                        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        View All
                    </Link>
                </div>
            </div>

            <Carousel className="w-full">
                <CarouselContent>
                    {rooms
                        ? rooms.map((room, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/4 p-4 mb-5 mt-5"
                            >
                                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
                                    <div className="relative">
                                        <AsyncImage
                                            src={`https://picsum.photos/600/400?${index}`}
                                            alt={room.name}
                                            className="w-full h-56 object-cover rounded-t-xl"
                                        />
                                        <span className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            ${room.price}/night
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-2xl font-semibold mb-2">
                                            <Link href={`/room/view/${room.id}`}>
                                                {room.name}
                                            </Link>
                                        </h3>
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
                                    </div>
                                </div>
                            </CarouselItem>
                        ))
                        : skeletons.map((_, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/4 p-4 mb-5 mt-5"
                            >
                                <Card>
                                    <Skeleton className="h-56 w-full rounded-t-xl" />
                                    <CardContent className="p-5 space-y-3">
                                        <Skeleton className="h-6 w-3/4" />
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-5/6" />
                                        <Skeleton className="h-8 w-full rounded-lg" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
            </Carousel>
        </section>
    );
}
