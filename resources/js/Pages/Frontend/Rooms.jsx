import { Head } from "@inertiajs/react";
import { lazy, Suspense } from "react";

import HeaderSkeleton from "./components/HeaderSkeleton";
import FooterSkeleton from "./components/FooterSkeleton";
import FilterSkeleton from "./components/FilterSkeleton";
import FetchRoomSkeleton from "./components/FetchRoomSkeleton";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Filter = lazy(() => import("./components/Filter"));
const FetchRoom = lazy(() => import("./components/FetchRoom"));

export default function Rooms({ data }) {
    return (
        <>
            <Head title="Hotels" />
            {/* header section */}
            <Suspense fallback={<HeaderSkeleton />}>
                <Header />
            </Suspense>
            {/* end header section */}

            {/* main section */}
            <main className="p-4 w-full flex flex-row gap-5">
                <div>
                    {/* Sidebar Filter Section */}
                    <Suspense fallback={<FilterSkeleton />}>
                        <Filter />
                    </Suspense>
                    {/* End Sidebar Filter Section */}
                </div>

                <div className="w-full">
                    <Suspense fallback={<FetchRoomSkeleton />}>
                        <FetchRoom data={data} />
                    </Suspense>
                </div>
            </main>
            {/* end main section */}

            {/* footer section */}
            <Suspense fallback={<FooterSkeleton />}>
                <Footer />
            </Suspense>
            {/* end footer section */}
        </>
    );
}
