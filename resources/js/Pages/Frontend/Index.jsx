import { Head } from "@inertiajs/react";
import { lazy, Suspense } from "react";

import RoomSkeleton from "./components/RoomSkeleton";
import HeaderSkeleton from "./components/HeaderSkeleton";
import FooterSkeleton from "./components/FooterSkeleton";
import SearchSkeleton from "./components/SearchSkeleton";
import HeroSkeleton from "./components/HeroSkeleton";

const Room = lazy(() => import("./components/Room"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Search = lazy(() => import("./components/Search"));
const Hero = lazy(() => import("./components/Hero"));

export default function Index() {
    return (
        <>
            <Head title="Homepage" />

            {/* header section */}
            <Suspense fallback={<HeaderSkeleton />}>
                <Header />
            </Suspense>
            {/* end header section */}

            {/* main section */}
            <Suspense fallback={<HeroSkeleton />}>
                <Hero />
            </Suspense>
            {/* end main section */}

            {/* search section */}
            <Suspense fallback={<SearchSkeleton />}>
                <Search />
            </Suspense>
            {/* end search section */}

            {/* single room section */}
            <Suspense fallback={<RoomSkeleton />}>
                <Room
                    title="Single Rooms"
                    type="single"
                    short_brief="Cozy room ideal for solo travelers, with all essential amenities."
                    url="Nope"
                />
            </Suspense>
            {/* end single room section */}

            {/* Double room section */}
            <Suspense fallback={<RoomSkeleton />}>
                <Room title="Double Rooms" type="double" short_brief="Spacious room with modern amenities and breathtaking city views." url="Nope" />
            </Suspense>
            {/* end Double room section */}

            {/* luxury room section */}
            <Suspense fallback={<RoomSkeleton />}>
                <Room title="Luxury Rooms" type="luxury" short_brief="Luxury suite with king-sized bed, private balcony, and premium services." url="Nope" />
            </Suspense>
            {/* end luxury room section */}

            {/* suite room section */}
            <Suspense fallback={<RoomSkeleton />}>
                <Room title="Suite Rooms" type="suite" short_brief="Luxury suite with king-sized bed, private balcony, and premium services." url="Nope" />
            </Suspense>
            {/* end suite room section */}

            {/* family room section */}
            <Suspense fallback={<RoomSkeleton />}>
                <Room title="Family Rooms" type="family" short_brief="Spacious room with modern amenities and breathtaking city views." url="Nope" />
            </Suspense>
            {/* end family room section */}

            {/* apartment room section */}
            <Suspense fallback={<RoomSkeleton />}>
                <Room title="Apartment Rooms" type="apartment" short_brief="Spacious room with modern amenities and breathtaking city views." url="Nope" />
            </Suspense>
            {/* end apartment room section */}

            {/* villa room section */}
            <Suspense fallback={<RoomSkeleton />}>
                <Room title="Villa Rooms" type="villa" short_brief="Spacious room with modern amenities and breathtaking city views." url="Nope" />
            </Suspense>
            {/* end villa room section */}

            {/* cabin room section */}
            <Suspense fallback={<RoomSkeleton />}>
                <Room title="Cabin Rooms" type="cabin" short_brief="Spacious room with modern amenities and breathtaking city views." url="Nope" />
            </Suspense>
            {/* end cabin room section */}

            {/* resort room section */}
            <Suspense fallback={<RoomSkeleton />}>
                <Room title="Resort Rooms" type="resort" short_brief="Spacious room with modern amenities and breathtaking city views." url="Nope" />
            </Suspense>
            {/* end resort room section */}

            {/* footer section */}
            <Suspense fallback={<FooterSkeleton />}>
                <Footer />
            </Suspense>
            {/* end footer section */}
        </>
    );
}
