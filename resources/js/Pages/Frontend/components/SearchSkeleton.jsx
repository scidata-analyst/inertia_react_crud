import { Skeleton } from "@/components/ui/skeleton"

export default function SearchSkeleton() {
    return (
        <section className="p-4 bg-gray-50 max-w-[1280px] mx-auto mt-4 rounded-2xl">
            {/* Title */}
            <div className="mb-6 text-center">
                <Skeleton className="h-10 w-80 mx-auto rounded-md bg-gray-200" />
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-white rounded-xl shadow-lg">
                {/* Location */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-20 bg-gray-200 rounded-md" />
                    <Skeleton className="h-12 w-full bg-gray-200 rounded-lg" />
                </div>

                {/* Check-in */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-20 bg-gray-200 rounded-md" />
                    <Skeleton className="h-12 w-full bg-gray-200 rounded-lg" />
                </div>

                {/* Check-out */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-24 bg-gray-200 rounded-md" />
                    <Skeleton className="h-12 w-full bg-gray-200 rounded-lg" />
                </div>

                {/* Room Type */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-24 bg-gray-200 rounded-md" />
                    <Skeleton className="h-12 w-full bg-gray-200 rounded-lg" />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 mt-4">
                    <Skeleton className="h-14 w-full bg-gray-200 rounded-lg" />
                </div>
            </div>
        </section>
    )
}
