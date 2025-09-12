import { Skeleton } from "@/components/ui/skeleton"

export default function SpecificRoomHeaderSkeleton() {
    return (
        <section className="relative w-full h-[400px] md:h-[500px]">
            {/* Background image skeleton */}
            <Skeleton className="absolute inset-0 w-full h-full rounded-none" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

            {/* Content skeleton */}
            <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-12 text-white">
                {/* Hotel name */}
                <Skeleton className="h-10 w-2/3 mb-3" />

                {/* Rating stars + text */}
                <div className="flex items-center gap-2 mb-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-24" />
                </div>

                {/* Price */}
                <Skeleton className="h-6 w-32" />
            </div>
        </section>
    )
}
