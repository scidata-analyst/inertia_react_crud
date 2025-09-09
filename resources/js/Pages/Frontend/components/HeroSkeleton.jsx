import { Skeleton } from "@/components/ui/skeleton"

export default function HeroSkeleton() {
    return (
        <main className="relative w-full">
            {/* Hero Background Skeleton */}
            <section className="relative h-[600px] rounded-b-3xl overflow-hidden">
                <Skeleton className="w-full h-full rounded-b-3xl" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <Skeleton className="h-12 w-80 mb-4 rounded-md bg-gray-200" />
                    <Skeleton className="h-6 w-[60%] mb-6 rounded-md bg-gray-200" />
                    <Skeleton className="h-12 w-40 rounded-full bg-gray-200" />
                </div>
            </section>

            {/* Featured Rooms Skeleton */}
            <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-20">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="bg-white rounded-3xl shadow-lg overflow-hidden"
                    >
                        <Skeleton className="w-full h-64 bg-gray-200" />
                        <div className="p-6 space-y-3">
                            <Skeleton className="h-6 w-40 bg-gray-200 rounded-md" />
                            <Skeleton className="h-4 w-full bg-gray-200 rounded-md" />
                            <Skeleton className="h-6 w-32 bg-gray-200 rounded-full" />
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}
